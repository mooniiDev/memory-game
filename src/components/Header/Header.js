// Packages imports
import { shape, number, func, bool } from 'prop-types';

// Components imports
import GameTitle from './GameTitle';
import ScoresSection from './ScoresSection';
import GameDescription from './GameDescription';
import Button from '../Button';

function Header(props) {
  const { scores, game, changeGameTheme } = props;

  return (
    <header id="Header">
      <div className="flex justify-evenly">
        <GameTitle />
        <ScoresSection scores={scores} game={game} />
      </div>
      <GameDescription game={game} changeGameTheme={changeGameTheme} />
      <Button
        type="button"
        buttonClass="block mx-auto border-solid border-2 border-black"
        buttonText={game.isFantasy ? `Grow` : `Play`}
      />
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
    isStarted: bool,
    isFinished: bool,
    isFantasy: bool,
    isWon: bool,
  }).isRequired,

  changeGameTheme: func.isRequired,
};

export default Header;
