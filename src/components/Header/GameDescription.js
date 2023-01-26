// Packages imports
import { shape, bool, func } from 'prop-types';

// Components imports
import Button from '../Button';

function GameDescription(props) {
  const { game, changeTheme } = props;

  // Show game description depending on the game theme
  return (
    <>
      {game.isFantasy ? (
        <h2>
          Forge a garden where no two blooms are ever the same.
          <br />
          A bounty of rare and exotic plant seedlings await your cultivation.
          <br />
          Successfully grow 18 of them and ascend to the throne of the Floral
          Master!
        </h2>
      ) : (
        <h2>
          Choose a card, but don&apos;t click on the same one twice.
          <br />
          Each correct choice gives you 1 point.
          <br />
          Score 18 points and win the game!
        </h2>
      )}

      <Button
        type="button"
        buttonClass="border-solid border-2 border-black"
        buttonEvent={changeTheme}
        buttonText={
          game.isFantasy
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
    isFantasy: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  changeTheme: func.isRequired,
};

export default GameDescription;
