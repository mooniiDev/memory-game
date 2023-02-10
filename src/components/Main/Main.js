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
    <main id="Main">
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
            buttonClass="border-solid border-2 border-black"
            buttonEvent={handleFantasyMode}
            buttonText={
              game.isFantasyMode
                ? 'Examine the Ordinary Game'
                : 'Rejoin the Fantasy Realm'
            }
          />
          {/* Show a button to start the game */}
          <Button
            type="button"
            buttonClass="block mx-auto border-solid border-2 border-black"
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
            buttonClass="border-solid border-2 border-black"
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
