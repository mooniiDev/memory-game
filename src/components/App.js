// Packages imports
import { useState } from 'react';
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

  // Toggle between themes of the game
  const changeTheme = () => {
    const newTheme = { ...game };

    newTheme.isFantasy = !newTheme.isFantasy;
    setGame(newTheme);
  };

  // Shuffle cards
  const shuffleDeck = (updatedDeck) => {
    const newDeck = [...updatedDeck];

    // Fisher-Yates algorithm for shuffling
    for (let i = newDeck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    setDeck(newDeck);
  };

  // Update score
  const updateScores = (newGame) => {
    const newScore = { ...scores };

    if (newGame.isFinished) {
      if (newGame.isWon) {
        newScore.currentScore += 1;
      }
      // Update the best score if the current score is higher than the best score
      newScore.bestScore = Math.max(newScore.bestScore, newScore.currentScore);
    } else {
      newScore.currentScore += 1;
    }

    setScores(newScore);
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

    // Reset all values of cards clicks to false
    const newDeck = deck.map((card) => {
      return { ...card, isClicked: false };
    });

    shuffleDeck(newDeck);
    setDeck(newDeck);
  };

  const handleCardClick = (cardId) => {
    const cardIndex = deck.findIndex((card) => card.id === cardId);
    const newDeck = [...deck];
    const newGame = { ...game };

    if (newDeck[cardIndex].isClicked) {
      newGame.isFinished = true;
      newGame.isWon = false;
    } else {
      newDeck[cardIndex].isClicked = true;
    }

    if (newDeck.every((card) => card.isClicked)) {
      newGame.isFinished = true;
      newGame.isWon = true;
    }

    setGame(newGame);
    updateScores(newGame);
    setDeck(newDeck);
    shuffleDeck(newDeck);
  };

  return (
    <div id="App" className="text-center ">
      <Header
        game={game}
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
