// Packages imports
import { number } from 'prop-types';

// Components imports
import GameTitle from './GameTitle';
import ScoresSection from './ScoresSection';

function Header(props) {
  const { currentScore, bestScore } = props;

  return (
    <header id="Header" className="flex justify-center gap-36">
      <GameTitle />
      <ScoresSection currentScore={currentScore} bestScore={bestScore} />
    </header>
  );
}

// Validating prop types
Header.propTypes = {
  currentScore: number.isRequired,
  bestScore: number.isRequired,
};

export default Header;
