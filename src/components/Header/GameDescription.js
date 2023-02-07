// Packages imports
import { shape, bool, func, arrayOf, string } from 'prop-types';

// Components imports
import Button from '../Button';

function GameDescription(props) {
  const { game, handleFantasyMode, deck } = props;

  // Show game description depending on the game mode
  return (
    <>
      {game.isFantasyMode ? (
        <h2>
          Forge a garden where no two blooms are ever the same.
          <br />
          A bounty of rare and exotic plant seedlings await your cultivation.
          <br />
          Successfully grow {deck.length} of them and ascend to the throne of
          the Floral Master!
        </h2>
      ) : (
        <h2>
          Choose a card, but don&apos;t click on the same one twice.
          <br />
          Each correct choice gives you 1 point.
          <br />
          Score {deck.length} points and win the game!
        </h2>
      )}

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
    </>
  );
}

// Validating prop types
GameDescription.propTypes = {
  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  handleFantasyMode: func.isRequired,

  deck: arrayOf(
    shape({
      image: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,
};

export default GameDescription;
