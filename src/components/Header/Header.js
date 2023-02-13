// Packages imports
import { shape, bool, number, func } from 'prop-types';

// Components imports
import GameLogo from './GameLogo';
import ScoresSection from './ScoresSection';

function Header(props) {
  const { game, scores, handleGoToHomePage } = props;

  return (
    <header id="Header" className="mb-5 flex flex-col">
      <GameLogo handleGoToHomePage={handleGoToHomePage} />
      <ScoresSection scores={scores} game={game} />
    </header>
  );
}

// Validating prop types
Header.propTypes = {
  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  scores: shape({
    currentScore: number,
    bestScore: number,
  }).isRequired,

  handleGoToHomePage: func.isRequired,
};

export default Header;
