// Packages imports
import { shape, bool, arrayOf, string, func } from 'prop-types';

// Components imports
// eslint-disable-next-line import/no-named-as-default
import GameDescription from './GameDescription';
import Button from '../Button';
import CardsList from './CardsList';
import EndGameDescription from './EndGameDescription';

function Main(props) {
  const { game, deck, handleFantasyMode, handlePlayGame, handleCardClick } =
    props;

  return (
    <main id="Main" className="mb-5 md:mx-10 lg:w-2/4 lg:self-center">
      {/* If the game hasn't started yet */}
      {!game.isStarted && (
        <>
          {/* Show game description */}
          <GameDescription
            game={game}
            handleFantasyMode={handleFantasyMode}
            deck={deck}
          />
          {/* Show a button to toggle between themes of the game */}
          <Button
            type="button"
            buttonClass="w-80 mt-8 py-2 px-4 text-xl border-solid border border-yellow-cream rounded-xl transition duration-400 ease-in-out drop-shadow-md active:text-green-dark active:bg-yellow-cream lg:hover:text-green-dark lg:hover:bg-yellow-cream"
            buttonEvent={handleFantasyMode}
            buttonText={
              game.isFantasyMode
                ? 'Examine the Ordinary Rules'
                : 'Rejoin the Fantasy Realm'
            }
          />
          {/* Show a button to start the game */}
          <Button
            type="button"
            buttonClass="block w-80 mx-auto mt-4 py-2 px-4 text-xl border-solid border border-yellow-cream rounded-xl transition duration-400 ease-in-out text-green-dark bg-yellow-cream drop-shadow-md lg:hover:text-yellow-cream lg:hover:bg-green-dark"
            buttonEvent={handlePlayGame}
            buttonText={game.isFantasyMode ? `Grow` : `Play`}
          />
        </>
      )}

      {/* If the game has started but not yet finished, show the deck of cards */}
      {game.isStarted && !game.isFinished && (
        <CardsList handleCardClick={handleCardClick} deck={deck} />
      )}

      {/* If the game has finished */}
      {game.isFinished && (
        <>
          {/* Show end of game description */}
          <EndGameDescription
            game={game}
            deck={deck}
            handlePlayGame={handlePlayGame}
          />
          {/* Show a button to play the game again */}
          <Button
            type="button"
            buttonClass="block w-72 mx-auto mt-6 py-2 px-3 text-xl border-solid border border-yellow-cream rounded-xl transition duration-400 ease-in-out text-green-dark bg-yellow-cream drop-shadow-md active:text-yellow-cream active:bg-green-dark lg:hover:text-yellow-cream lg:hover:bg-green-dark"
            buttonEvent={handlePlayGame}
            buttonText={game.isFantasyMode ? 'Grow Again' : 'Play Again'}
          />
        </>
      )}
    </main>
  );
}

// Validating prop types
Main.propTypes = {
  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  deck: arrayOf(
    shape({
      image: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  handleFantasyMode: func.isRequired,
  handlePlayGame: func.isRequired,
  handleCardClick: func.isRequired,
};

export default Main;
