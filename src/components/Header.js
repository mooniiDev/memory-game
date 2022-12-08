function Header() {
  return (
    <header id="Header">
      {/* GAME TITLE */}
      <h1 className="game-title">MEMORY GAME</h1>

      {/* SECTION OF CURRENT SCORE AND BEST SCORE */}
      <div className="scores-section">
        <div className="current-score-box">
          Current Score: <span className="current-score">0</span>
        </div>
        <div className="best-score-box">
          Best Score: <span className="current-score">7</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
