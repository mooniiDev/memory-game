// Packages imports
import { func, shape, bool, arrayOf, string } from 'prop-types';

// Components imports
import Button from '../Button';

function EndGameDescription(props) {
  const { game, deck, playGame } = props;
  let description;

  if (game.isWon) {
    description = game.isFantasyMode ? (
      // If the game is won in a fantasy mode
      <p>
        Bravo! {deck.length} rare and exotic plant species, all successfully
        grown under your expert care.
      </p>
    ) : (
      // If the game is won in an ordinary mode
      <p>
        Congratulations! You have clicked all the different cards and won the
        game.
      </p>
    );
  } else {
    // If the game is lost in a fantasy mode
    description = game.isFantasyMode ? (
      <p>
        Alas! This seed has already been sprouted, therefore venture forth and
        try again.
      </p>
    ) : (
      // If the game is lost in an ordinary mode
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
        buttonText={game.isFantasyMode ? 'Grow Again' : 'Play Again'}
      />
    </>
  );
}

// Validating prop types
EndGameDescription.propTypes = {
  playGame: func.isRequired,

  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  deck: arrayOf(
    shape({
      name: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,
};

export default EndGameDescription;
