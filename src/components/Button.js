// Packages imports
import { string } from 'prop-types';

function Button(props) {
  const { buttonClass, buttonText } = props;

  return (
    <button type="button" className={buttonClass}>
      {buttonText}
    </button>
  );
}

// Validating prop types
Button.propTypes = {
  buttonText: string.isRequired,
  buttonClass: string.isRequired,
};

export default Button;
