// Packages imports
import { func, shape, bool } from 'prop-types';

// Components imports
import Button from '../Button';

function EndGameDescription(props) {
  const { game, playGame } = props;
  let description;

  // If the game is won on a fantasy theme
  if (game.isFantasy && game.isWon) {
    description = (
      <p>
        Bravo! 18 rare and exotic plant species, all successfully grown under
        your expert care.
      </p>
    );

    // If the game is lost on a fantasy theme
  } else if (game.isFantasy && !game.isWon) {
    description = (
      <p>
        Alas! This seed has already been sprouted, therefore venture forth and
        try again.
      </p>
    );

    // If the game is won on an ordinary theme
  } else if (!game.isFantasy && game.isWon) {
    description = <p>Congratulations! You won the game.</p>;

    // If a game is lost on an ordinary theme
  } else if (!game.isFantasy && !game.isWon) {
    description = <p>Failure! You lost the game.</p>;
  }
  return (
    <>
      {description}
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonEvent={playGame}
        buttonText={game.isFantasy ? 'Grow Again' : 'Play Again'}
      />
    </>
  );
}

// Validating prop types
EndGameDescription.propTypes = {
  playGame: func.isRequired,

  game: shape({
    isStarted: bool,
    isFinished: bool,
    isFantasy: bool,
    isWon: bool,
  }).isRequired,
};

export default EndGameDescription;
