// Packages imports
import { shape, bool, number } from 'prop-types';

// Components imports
import ScoreBox from './ScoreBox';

function ScoresSection(props) {
  const { game, scores } = props;

  return (
    <div className="flex flex-col justify-center text-xl md:flex-row md:gap-5 md:self-center">
      <ScoreBox
        scoreTitle={game.isFantasyMode ? 'Currently Growing' : 'Current Score'}
        score={scores.currentScore}
      />
      <ScoreBox
        scoreTitle={game.isFantasyMode ? 'Best Grown' : 'Best Score'}
        score={scores.bestScore}
      />
    </div>
  );
}

// Validating prop types
ScoresSection.propTypes = {
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
};

export default ScoresSection;
