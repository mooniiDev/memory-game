// Packages imports
import { func, arrayOf, shape } from 'prop-types';

// Components imports
import GameDescription from './GameDescription';
import Button from '../Button';
import CardsList from './CardsList';
import EndGameDescription from './EndGameDescription';

function Main(props) {
  const { handleCardClick, deck } = props;

  return (
    <main id="Main" className="min-h-[calc(100vh-8rem)]">
      <GameDescription />
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonText="Play!"
      />
      <CardsList handleCardClick={handleCardClick} deck={deck} />
      <EndGameDescription />
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonText="Try Again!"
      />
    </main>
  );
}

// Validating prop types
Main.propTypes = {
  handleCardClick: func.isRequired,
  deck: arrayOf(shape({})).isRequired,
};

export default Main;
