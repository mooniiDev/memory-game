// Packages imports
import { useState, useEffect, useCallback } from 'react';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

// Cards imports
import cardsData from '../utils/cards';

function App() {
  // Default game data
  const gameData = {
    isFantasyMode: true,
    isStarted: false,
    isFinished: false,
    isWon: false,
  };

  // Default scores data
  const scoresData = {
    currentScore: 0,
    bestScore: 0,
  };

  // Game state with initial defaults
  const [game, setGame] = useState(gameData);

  // Scores state with initial defaults
  const [scores, setScores] = useState(scoresData);

  // Cards state with initial defaults from '../utils/cards'
  const [deck, setDeck] = useState(cardsData);

  // Go to the home page
  // and change the game, score and card data to the initial defaults
  const handleGoToHomePage = () => {
    setGame(gameData);
    setScores(scoresData);
    setDeck(cardsData);
  };

  // Toggle between modes of the game
  const handleFantasyMode = () => {
    setGame((prevGame) => {
      return { ...prevGame, isFantasyMode: !prevGame.isFantasyMode };
    });
  };

  // Start a new game
  const handlePlayGame = () => {
    setGame((prevGame) => {
      return { ...prevGame, isStarted: true, isFinished: false };
    });
    setScores((prevScores) => {
      return { ...prevScores, currentScore: 0 };
    });
    setDeck((prevDeck) => [
      ...prevDeck.map((card) => ({ ...card, isClicked: false })),
    ]);
  };

  const shuffleDeck = () => {
    setDeck((prevDeck) => {
      const newDeck = [...prevDeck];

      // Fisher-Yates algorithm for shuffling
      for (let i = prevDeck.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
      }
      return newDeck;
    });
  };

  // Shuffle the deck when a new game is started
  // or when the current score is updated
  useEffect(() => {
    shuffleDeck();
  }, [game.isStarted, scores.currentScore]);

  // If a card was successfully clicked,
  // one point is added to the current score
  const addPointToCurrentScore = () => {
    setScores(({ currentScore }) => {
      return {
        ...scores,
        currentScore: currentScore + 1,
      };
    });
  };

  // Compare the two values
  // and assign the higher value to the best score
  const updateBestScore = () => {
    setScores((prevScores) => ({
      ...prevScores,
      bestScore: Math.max(prevScores.currentScore, prevScores.bestScore),
    }));
  };

  // Set a game either won or lost
  const handleGameEnd = useCallback((isWon) => {
    updateBestScore();

    setGame((prevGame) => {
      return {
        ...prevGame,
        isFinished: true,
        isWon,
      };
    });
  }, []);

  // Check that all cards have been successfully clicked
  const allCardsClicked = deck.every((item) => item.isClicked);
  useEffect(() => {
    if (allCardsClicked) {
      // The "true" argument means that the game is won
      handleGameEnd(true);
    }
  }, [allCardsClicked, handleGameEnd]);

  // Track card click
  const handleCardClick = (cardId) => {
    setDeck((prevDeck) => {
      const card = prevDeck.find((item) => item.id === cardId);

      // If a card has not been clicked before
      if (!card.isClicked) {
        addPointToCurrentScore();
        // Make a card to be clicked
        return prevDeck.map((item) =>
          item.id === cardId ? { ...item, isClicked: true } : item
        );
      }
      // The "false" argument means that the game is lost
      handleGameEnd(false);
      return prevDeck;
    });
  };

  return (
    <div id="App" className="text-center ">
      <Header
        handleGoToHomePage={handleGoToHomePage}
        game={game}
        deck={deck}
        handleFantasyMode={handleFantasyMode}
        handlePlayGame={handlePlayGame}
        scores={scores}
      />

      {game.isStarted ? (
        <Main
          game={game}
          deck={deck}
          handlePlayGame={handlePlayGame}
          handleCardClick={handleCardClick}
        />
      ) : null}

      <Footer />
    </div>
  );
}

export default App;
