// Packages imports
import { func, string } from 'prop-types';

function Card(props) {
  const { handleCardClick, cardImage } = props;

  return (
    <button type="button" className="m-3 w-1/6" onClick={handleCardClick}>
      <img src={cardImage} alt="Card of Plant" />
    </button>
  );
}

// Validating prop types
Card.propTypes = {
  handleCardClick: func.isRequired,
  cardImage: string.isRequired,
};

export default Card;
