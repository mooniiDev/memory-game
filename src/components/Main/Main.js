// Packages imports
import { shape, bool, arrayOf, string, func } from 'prop-types';

// Components imports
import CardsList from './CardsList';
import EndGameDescription from './EndGameDescription';

function Main(props) {
  const { playGame, handleCardClick, deck, game } = props;

  return (
    <main id="Main">
      {game.isFinished ? (
        <EndGameDescription game={game} deck={deck} playGame={playGame} />
      ) : (
        <CardsList handleCardClick={handleCardClick} deck={deck} />
      )}
    </main>
  );
}

// Validating prop types
Main.propTypes = {
  handleCardClick: func.isRequired,

  deck: arrayOf(
    shape({
      image: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  playGame: func.isRequired,
};

export default Main;
