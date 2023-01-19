// Packages imports
import { string, func } from 'prop-types';

function Button(props) {
  const { buttonClass, buttonEvent, buttonType, buttonText } = props;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={buttonEvent}
      data-button={buttonType}
    >
      {buttonText}
    </button>
  );
}

// Validating prop types
Button.propTypes = {
  buttonClass: string.isRequired,
  buttonEvent: func.isRequired,
  buttonType: string.isRequired,
  buttonText: string.isRequired,
};

export default Button;
