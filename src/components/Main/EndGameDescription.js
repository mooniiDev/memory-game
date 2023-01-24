// Packages imports
import { shape, bool } from 'prop-types';

// Components imports
import Button from '../Button';

function EndGameDescription(props) {
  const { game } = props;
  let description;

  if (game.isFantasy && game.isWon) {
    description = (
      <p>
        Bravo! 18 rare and exotic plant species, all successfully grown under
        your expert care.
      </p>
    );
  } else if (game.isFantasy && !game.isWon) {
    description = (
      <p>
        Alas! This seed has already been sprouted, so venture forth and try
        again.
      </p>
    );
  } else if (!game.isFantasy && game.isWon) {
    description = <p>Congratulations! You won the game.</p>;
  } else if (!game.isFantasy && !game.isWon) {
    description = <p>Failure! You lost the game.</p>;
  }
  return (
    <>
      {description}
      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonText={game.isFantasy ? 'Grow Again' : 'Play Again'}
      />
    </>
  );
}

// Validating prop types
EndGameDescription.propTypes = {
  game: shape({
    isStarted: bool,
    isFinished: bool,
    isFantasy: bool,
    isWon: bool,
  }).isRequired,
};

export default EndGameDescription;
