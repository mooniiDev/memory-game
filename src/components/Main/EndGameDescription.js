// Packages imports
import { shape, bool, arrayOf, string } from 'prop-types';

function EndGameDescription(props) {
  const { game, deck } = props;
  let description;

  if (game.isWon) {
    description = game.isFantasyMode ? (
      // If the game was won in fantasy mode
      <p>
        Bravo! {deck.length} rare and exotic plant species, all successfully
        grown under your expert care.
      </p>
    ) : (
      // If the game was won in ordinary mode
      <p>
        Congratulations! You have clicked all the different cards and won the
        game.
      </p>
    );
  } else {
    // If the game was lost in fantasy mode
    description = game.isFantasyMode ? (
      <p>
        Alas! This seed has already been sprouted, therefore venture forth and
        try again.
      </p>
    ) : (
      // If the game was lost in ordinary mode
      <p>
        Failure! This card has already been clicked.. Guess what? You lost the
        game.
      </p>
    );
  }

  return <div>{description}</div>;
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
