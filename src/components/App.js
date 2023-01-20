// Packages imports
import { useState } from 'react';
import uniqid from 'uniqid';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // State of score
  const [score, setScore] = useState({
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

  // Update score
  const updateScore = (cardIndex) => {
    const newScore = { ...score };

    if (deck[cardIndex].isClicked === true) {
      if (newScore.bestScore < newScore.currentScore) {
        newScore.bestScore = newScore.currentScore;
        newScore.currentScore = 0;
      }
    } else {
      newScore.currentScore += 1;
    }

    setScore(newScore);
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
    updateScore(cardIndex);

    const newDeck = [...deck];
    newDeck[cardIndex].isClicked = true;

    setDeck(newDeck);
    shuffleDeck();
  };

  return (
    <div id="App" className="text-center">
      <Header
        currentScore={score.currentScore}
        bestScore={score.bestScore}
        updateScore={updateScore}
      />
      <Main handleCardClick={handleCardClick} deck={deck} />
      <Footer />
    </div>
  );
}

export default App;
