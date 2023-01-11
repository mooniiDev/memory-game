// Packages imports
import { string } from 'prop-types';

function Card(props) {
  const { cardNumber } = props;
  return (
    <button type="button" className="w-1/6">
      Plant{cardNumber}
      &nbsp;
    </button>
  );
}

// Validating prop types
Card.propTypes = {
  cardNumber: string.isRequired,
};

export default Card;
