// Packages imports
import { shape, number, bool, func, arrayOf, string } from 'prop-types';

// Components imports
import GameTitle from './GameTitle';
import ScoresSection from './ScoresSection';
import GameDescription from './GameDescription';
import Button from '../Button';

function Header(props) {
  const {
    handleGoToHomePage,
    scores,
    game,
    handleFantasyMode,
    deck,
    handlePlayGame,
  } = props;

  return (
    <header id="Header">
      <div className="flex justify-evenly">
        <GameTitle handleGoToHomePage={handleGoToHomePage} />
        <ScoresSection scores={scores} game={game} />
      </div>
      {!game.isStarted ? (
        <>
          <GameDescription
            game={game}
            handleFantasyMode={handleFantasyMode}
            deck={deck}
          />
          <Button
            type="button"
            buttonClass="block mx-auto border-solid border-2 border-black"
            buttonEvent={handlePlayGame}
            buttonText={game.isFantasyMode ? `Grow` : `Play`}
          />
        </>
      ) : null}
    </header>
  );
}

// Validating prop types
Header.propTypes = {
  handleGoToHomePage: func.isRequired,

  scores: shape({
    currentScore: number,
    bestScore: number,
  }).isRequired,

  game: shape({
    isFantasyMode: bool,
    isStarted: bool,
    isFinished: bool,
    isWon: bool,
  }).isRequired,

  handleFantasyMode: func.isRequired,

  deck: arrayOf(
    shape({
      image: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  handlePlayGame: func.isRequired,
};

export default Header;
