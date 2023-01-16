// Packages imports
import { func, string } from 'prop-types';

// Components imports
import Button from '../Button';

function Card(props) {
  const { cardNumber, shuffleCards } = props;

  return (
    <Button
      type="button"
      buttonClass="w-1/6"
      buttonEvent={shuffleCards}
      buttonText={`Plant${cardNumber}`}
    />
  );
}

// Validating prop types
Card.propTypes = {
  cardNumber: string.isRequired,
  shuffleCards: func.isRequired,
};

export default Card;
