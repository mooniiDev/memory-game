// Packages imports
import { func } from 'prop-types';

// Components imports
import Button from '../Button';

function GameTitle(props) {
  const { handleGoToHomePage } = props;

  return (
    <Button
      type="button"
      buttonClass="block"
      buttonEvent={handleGoToHomePage}
      buttonText="MEMORY GAME"
    />
  );
}

// Validating prop types
GameTitle.propTypes = {
  handleGoToHomePage: func.isRequired,
};

export default GameTitle;
