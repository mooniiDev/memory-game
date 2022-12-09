// Components Imports
import ScoreBox from './ScoreBox';

function ScoresSection() {
  return (
    <div className="scores-section">
      <ScoreBox scoreTitle="Current Score" score="0" />
      <ScoreBox scoreTitle="Best Score" score="7" />
    </div>
  );
}

export default ScoresSection;
