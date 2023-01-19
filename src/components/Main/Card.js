// Packages imports
import { func, string } from 'prop-types';

// Components imports
import Button from '../Button';

function Card(props) {
  const { handleCardClick, cardName } = props;

  return (
    <Button
      type="button"
      buttonClass="w-1/6"
      buttonEvent={handleCardClick}
      buttonText={`Plant${cardName}`}
      buttonType="card"
    />
  );
}

// Validating prop types
Card.propTypes = {
  handleCardClick: func.isRequired,
  cardName: string.isRequired,
};

export default Card;
