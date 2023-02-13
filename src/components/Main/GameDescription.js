// Packages imports
import { shape, bool, arrayOf, string } from 'prop-types';

function GameDescription(props) {
  const { game, deck } = props;

  // Show game description depending on the game mode
  return (
    <div className="m-auto w-4/5 rounded-xl bg-green-super-dark p-5 text-lg drop-shadow-md">
      {/* If the game has fantasy mode, show fantasy text */}
      {game.isFantasyMode ? (
        <p>
          Forge a garden where no two blooms are ever the same.
          <p className="text-green-light">∽∾∽</p>A bounty of rare and exotic
          plant seedlings await your cultivation.
          <p className="text-green-light">∽∾∽</p>
          Successfully grow {deck.length} of them and ascend to the throne of
          the Floral Master!
        </p>
      ) : (
        // If the game hasn't fantasy mode, show ordinary text
        <p>
          Choose a card, but don&apos;t click on the same one twice.
          <p className="text-green-light">∽∾∽</p>
          Each correct choice gives you 1 point.
          <p className="text-green-light">∽∾∽</p>
          Score {deck.length} points and win the game!
        </p>
      )}
    </div>
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

  deck: arrayOf(
    shape({
      image: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,
};

export default GameDescription;
