// Packages imports
import { shape, bool, arrayOf, string } from 'prop-types';

function GameDescription(props) {
  const { game, deck } = props;

  // Show game description depending on the game mode
  return (
    <div className="m-auto w-80 rounded-xl bg-green-super-dark px-4 py-6 text-xl drop-shadow-md md:w-8/12 lg:w-3/5 lg:px-24 lg:py-12">
      {/* If the game has fantasy mode, show fantasy text */}
      {game.isFantasyMode ? (
        <p>
          Forge a garden where no two blooms are ever the same.
          <br />
          <span className="text-green-light">∾</span>
          <br />
          A bounty of unique and mysterious plant seedlings await your
          cultivation.
          <br />
          <span className="text-green-light">∾</span>
          <br />
          Successfully grow {deck.length} of them and ascend to the throne of
          the Floral Master!
        </p>
      ) : (
        // If the game hasn't fantasy mode, show ordinary text
        <p>
          Choose a card, but don&apos;t click on the same one twice.
          <br />
          <span className="text-green-light">∾</span>
          <br />
          Each correct choice gives you 1 point.
          <br />
          <span className="text-green-light">∾</span>
          <br />
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
