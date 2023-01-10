// Components imports
import ScoreBox from './ScoreBox';

function ScoresSection() {
  return (
    <div className="flex gap-10 self-center">
      <ScoreBox scoreTitle="Current Score" score={0} />
      <ScoreBox scoreTitle="Best Score" score={7} />
    </div>
  );
}

export default ScoresSection;
