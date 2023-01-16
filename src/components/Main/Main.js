// Packages imports
import { useState } from 'react';

// Components imports
import GameDescription from './GameDescription';
import Button from '../Button';
import CardsList from './CardsList';
import EndGameDescription from './EndGameDescription';

function Main() {
  // State of cards
  const [cards, setCards] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
  ]);

  // Function for shuffling and displaying cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  return (
    <main id="Main" className="min-h-[calc(100vh-8rem)]">
      <GameDescription />
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonText="Play!"
      />
      <CardsList shuffledCards={cards} shuffleCards={shuffleCards} />
      <EndGameDescription />
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonText="Try Again!"
      />
    </main>
  );
}

export default Main;
