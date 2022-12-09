function ScoreBox(props) {
  // eslint-disable-next-line react/prop-types
  const { scoreTitle, score } = props;
  return (
    <div className="current-score-box best-score-box">
      {scoreTitle}: <span className="score">{score}</span>
    </div>
  );
}

export default ScoreBox;
