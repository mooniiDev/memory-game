// Packages imports
import { useState, useEffect, useCallback } from 'react';
import uniqid from 'uniqid';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // State of game
  const [game, setGame] = useState({
    isFantasyMode: true,
    isStarted: false,
    isFinished: false,
    isWon: false,
  });

  // State of scores
  const [scores, setScores] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  // State of cards
  const [deck, setDeck] = useState([
    { name: '1', id: uniqid(), isClicked: false },
    { name: '2', id: uniqid(), isClicked: false },
    { name: '3', id: uniqid(), isClicked: false },
    { name: '4', id: uniqid(), isClicked: false },
    { name: '5', id: uniqid(), isClicked: false },
    { name: '6', id: uniqid(), isClicked: false },
    { name: '7', id: uniqid(), isClicked: false },
    { name: '8', id: uniqid(), isClicked: false },
    { name: '9', id: uniqid(), isClicked: false },
    { name: '10', id: uniqid(), isClicked: false },
    { name: '11', id: uniqid(), isClicked: false },
    { name: '12', id: uniqid(), isClicked: false },
    { name: '13', id: uniqid(), isClicked: false },
    { name: '14', id: uniqid(), isClicked: false },
    { name: '15', id: uniqid(), isClicked: false },
    { name: '16', id: uniqid(), isClicked: false },
    { name: '17', id: uniqid(), isClicked: false },
    { name: '18', id: uniqid(), isClicked: false },
  ]);

  // Toggle between modes of the game
  const toggleFantasyMode = () => {
    setGame((prevGame) => {
      return { ...prevGame, isFantasyMode: !prevGame.isFantasyMode };
    });
  };

  // Start a new game
  const playGame = () => {
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

  const updateBestScore = () => {
    setScores((prevScores) => ({
      ...prevScores,
      // Compare the two values
      // and assign the higher value to the best score
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
        game={game}
        deck={deck}
        toggleFantasyMode={toggleFantasyMode}
        playGame={playGame}
        scores={scores}
      />

      {game.isStarted ? (
        <Main
          game={game}
          deck={deck}
          playGame={playGame}
          handleCardClick={handleCardClick}
        />
      ) : null}

      <Footer />
    </div>
  );
}

export default App;
