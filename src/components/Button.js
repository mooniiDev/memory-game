// Packages imports
import { string, func } from 'prop-types';

function Button(props) {
  const { buttonClass, buttonEvent, buttonText } = props;

  return (
    <button type="button" className={buttonClass} onClick={buttonEvent}>
      {buttonText}
    </button>
  );
}

// Validating prop types
Button.propTypes = {
  buttonClass: string.isRequired,
  buttonEvent: func.isRequired,
  buttonText: string.isRequired,
};

export default Button;
