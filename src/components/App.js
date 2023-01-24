// Packages imports
import { useState } from 'react';
import uniqid from 'uniqid';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // State of gameplay
  const [game, setGame] = useState({
    isStarted: true,
    isFinished: true,
    isFantasy: true,
    isWon: true,
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
  const changeGameTheme = () => {
    const newTheme = { ...game };

    newTheme.isFantasy = !newTheme.isFantasy;

    setGame(newTheme);
  };

  // Update score
  const updateScores = (cardIndex) => {
    const updatedScore = { ...scores };

    if (deck[cardIndex].isClicked === true) {
      if (updatedScore.bestScore < updatedScore.currentScore) {
        updatedScore.bestScore = updatedScore.currentScore;
        updatedScore.currentScore = 0;
      }
    } else {
      updatedScore.currentScore += 1;
    }

    setScores(updatedScore);
  };

  // Shuffle cards
  const shuffleDeck = () => {
    const shuffledDeck = [...deck];

    // Fisher-Yates algorithm for shuffling
    for (let i = shuffledDeck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }

    setDeck(shuffledDeck);
  };

  // Handle click of card
  const handleCardClick = (cardId) => {
    const cardIndex = deck.findIndex((card) => card.id === cardId);
    updateScores(cardIndex);

    const newDeck = [...deck];
    newDeck[cardIndex].isClicked = true;

    setDeck(newDeck);
    shuffleDeck();
  };

  return (
    <div id="App" className="text-center ">
      <Header game={game} changeGameTheme={changeGameTheme} scores={scores} />

      {game.isStarted ? (
        <Main game={game} deck={deck} handleCardClick={handleCardClick} />
      ) : null}

      <Footer />
    </div>
  );
}

export default App;
