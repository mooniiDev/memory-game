// Packages imports
import { func } from 'prop-types';

// Logo import
import logo from '../../assets/logo.png';

function GameLogo(props) {
  const { handleGoToHomePage } = props;

  return (
    <button
      type="button"
      onClick={handleGoToHomePage}
      className="self-center py-5"
    >
      <img src={logo} alt="Memory Game Logo" />
    </button>
  );
}

// Validating prop types
GameLogo.propTypes = {
  handleGoToHomePage: func.isRequired,
};

export default GameLogo;
