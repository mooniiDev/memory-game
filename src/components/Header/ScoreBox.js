// Packages imports
import { string, number } from 'prop-types';

function ScoreBox(props) {
  const { scoreTitle, score } = props;

  return (
    <div className="py-0.5">
      {scoreTitle}
      <span className="ml-2 inline-block w-9 rounded-xl bg-green-light pb-0.5 font-alice text-2xl drop-shadow-md">
        {score}
      </span>
    </div>
  );
}

ScoreBox.propTypes = {
  scoreTitle: string.isRequired,
  score: number.isRequired,
};

export default ScoreBox;
