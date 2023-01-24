// Packages imports
import { string, number } from 'prop-types';

function ScoreBox(props) {
  const { scoreTitle, score } = props;

  return (
    <div>
      {scoreTitle}: <span>{score}</span>
    </div>
  );
}

ScoreBox.propTypes = {
  scoreTitle: string.isRequired,
  score: number.isRequired,
};

export default ScoreBox;
