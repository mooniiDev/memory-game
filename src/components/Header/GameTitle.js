// Packages imports
import { func } from 'prop-types';

// Logo import
import logo from '../../assets/logo.png';

function GameTitle(props) {
  const { handleGoToHomePage } = props;

  return (
    <button type="button" onClick={handleGoToHomePage}>
      <img src={logo} alt="Memory Game Logo" />
    </button>
  );
}

// Validating prop types
GameTitle.propTypes = {
  handleGoToHomePage: func.isRequired,
};

export default GameTitle;
