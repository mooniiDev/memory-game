// Packages imports
import { func, shape, bool } from 'prop-types';

// Components imports
import Button from '../Button';

function EndGameDescription(props) {
  const { game, playGame } = props;
  let description;

  if (game.isWon) {
    description = game.isFantasy ? (
      // If the game is won in a fantasy theme
      <p>
        Bravo! 18 rare and exotic plant species, all successfully grown under
        your expert care.
      </p>
    ) : (
      // If the game is won in an ordinary theme
      <p>
        Congratulations! You have clicked all the different cards and won the
        game.
      </p>
    );
  } else {
    // If the game is lost in a fantasy theme
    description = game.isFantasy ? (
      <p>
        Alas! This seed has already been sprouted, therefore venture forth and
        try again.
      </p>
    ) : (
      // If the game is lost in an ordinary theme
      <p>
        Failure! This card has already been clicked.. Guess what? You lost the
        game.
      </p>
    );
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
    isFantasy: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,
};

export default EndGameDescription;
