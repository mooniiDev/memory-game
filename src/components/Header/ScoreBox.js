// Packages imports
import { string, number } from 'prop-types';

function ScoreBox(props) {
  const { scoreTitle, score } = props;
  return (
    <div className="current-score-box best-score-box">
      {scoreTitle}: <span className="score">{score}</span>
    </div>
  );
}

ScoreBox.propTypes = {
  scoreTitle: string.isRequired,
  score: number.isRequired,
};

export default ScoreBox;
