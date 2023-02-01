// Packages imports
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // State of game
  const [game, setGame] = useState({
    isFantasy: true,
    isStarted: false,
    isFinished: false,
    isWon: false,
  });

  // State of score
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

  // Toggle between themed texts of the game
  const changeTheme = () => {
    setGame((prevGame) => {
      return { ...prevGame, isFantasy: !prevGame.isFantasy };
    });
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

  // Shuffle the deck if a new game has started/ended and if 1 point has been scored
  useEffect(() => {
    shuffleDeck();
  }, [game.isStarted, game.isFinished, scores.currentScore]);

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

  // Start a new game
  const playGame = () => {
    const newGame = { ...game };
    const newScore = { ...scores };

    newGame.isStarted = true;
    newGame.isFinished = false;
    setGame(newGame);

    newScore.currentScore = 0;
    setScores(newScore);

  const handleGameEnd = (isWon) => {
    setGame((prevGame) => {
      if (isWon) {
        return { ...prevGame, isFinished: true, isWon };
      }
      return { ...prevGame, isFinished: true, isWon: false };
    });
  };

  // Check that all cards have been successfully clicked
  useEffect(() => {
    const allCardsClicked = deck.every((card) => card.isClicked);

    // Set the end of the game as won
    if (allCardsClicked) {
      handleGameEnd(true);
    }
  }, [deck]);

  // Track card click
  const handleCardClick = (cardId) => {
    setDeck((prevDeck) => {
      const card = prevDeck.find((item) => item.id === cardId);

      // Make a card clicked if it has not been clicked before
      if (!card.isClicked) {
        return prevDeck.map((item) =>
          item.id === cardId ? { ...item, isClicked: true } : item
        );
      }
      // If a card has already been clicked - set the end of the game as lost
      handleGameEnd(false);
      return prevDeck;
    });
  };

  return (
    <div id="App" className="text-center ">
      <Header
        game={game}
        deck={deck}
        changeTheme={changeTheme}
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
