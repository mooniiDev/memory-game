// Packages imports
import { shape, number, bool, func, arrayOf, string } from 'prop-types';

// Components imports
import GameTitle from './GameTitle';
import ScoresSection from './ScoresSection';
import GameDescription from './GameDescription';
import Button from '../Button';

function Header(props) {
  const { scores, game, changeTheme, deck, playGame } = props;

  return (
    <header id="Header">
      <div className="flex justify-evenly">
        <GameTitle />
        <ScoresSection scores={scores} game={game} />
      </div>
      {!game.isStarted ? (
        <>
          <GameDescription game={game} changeTheme={changeTheme} deck={deck} />
          <Button
            type="button"
            buttonClass="block mx-auto border-solid border-2 border-black"
            buttonEvent={playGame}
            buttonText={game.isFantasy ? `Grow` : `Play`}
          />
        </>
      ) : null}
    </header>
  );
}

// Validating prop types
Header.propTypes = {
  scores: shape({
    currentScore: number,
    bestScore: number,
  }).isRequired,

  game: shape({
    isFantasy: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  changeTheme: func.isRequired,

  deck: arrayOf(
    shape({
      name: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  playGame: func.isRequired,
};

export default Header;
