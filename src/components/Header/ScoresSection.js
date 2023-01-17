// Packages imports
import { number } from 'prop-types';

// Components imports
import ScoreBox from './ScoreBox';

function ScoresSection(props) {
  const { currentScore, bestScore } = props;

  return (
    <div className="flex gap-10 self-center">
      <ScoreBox scoreTitle="Current Score" score={currentScore} />
      <ScoreBox scoreTitle="Best Score" score={bestScore} />
    </div>
  );
}

// Validating prop types
ScoresSection.propTypes = {
  currentScore: number.isRequired,
  bestScore: number.isRequired,
};

export default ScoresSection;
