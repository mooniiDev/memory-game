// Packages imports
import { shape, bool, arrayOf, string } from 'prop-types';

function EndGameDescription(props) {
  const { game, deck } = props;
  let description;

  if (game.isWon) {
    description = game.isFantasyMode ? (
      // If the game was won in fantasy mode
      <p>
        <span className="font-alice text-2xl">Bravo!</span>
        <br />
        <span className="text-green-light">∾</span>
        <br />
        All {deck.length} unique and mysterious plant species thrive and bloom
        under your expert care.
      </p>
    ) : (
      // If the game was won in ordinary mode
      <p>
        <span className="font-alice text-2xl">Congratulations!</span>
        <br />
        <span className="text-green-light">∾</span>
        <br />
        You have clicked all {deck.length} different cards and won the game.
      </p>
    );
  } else {
    // If the game was lost in fantasy mode
    description = game.isFantasyMode ? (
      <p>
        <span className="font-alice text-2xl">Curses!</span>
        <br />
        <span className="text-green-light">∾</span>
        <br />
        This seed has already been sprouted, therefore rekindle your spirit and
        venture forth once more.
      </p>
    ) : (
      // If the game was lost in ordinary mode
      <p>
        <span className="font-alice text-2xl">Failure!</span>
        <br />
        <span className="text-green-light">∾</span>
        <br />
        This card has already been clicked and you lost the game. Next time you
        will focus better!
      </p>
    );
  }

  return (
    <div className="m-auto w-10/12 rounded-xl bg-green-super-dark px-4 py-6 text-xl drop-shadow-md">
      {description}
    </div>
  );
}

// Validating prop types
EndGameDescription.propTypes = {
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

export default EndGameDescription;
