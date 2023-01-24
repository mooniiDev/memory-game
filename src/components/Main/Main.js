// Packages imports
import { shape, bool, arrayOf, string, func } from 'prop-types';

// Components imports
import CardsList from './CardsList';
import EndGameDescription from './EndGameDescription';

function Main(props) {
  const { handleCardClick, deck, game } = props;

  return (
    <main id="Main">
      <CardsList handleCardClick={handleCardClick} deck={deck} />
      {game.isFinished ? <EndGameDescription game={game} /> : null}
    </main>
  );
}

// Validating prop types
Main.propTypes = {
  handleCardClick: func.isRequired,

  deck: arrayOf(
    shape({
      name: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  game: shape({
    isStarted: bool,
    isFinished: bool,
    isFantasy: bool,
    isWon: bool,
  }).isRequired,
};

export default Main;
