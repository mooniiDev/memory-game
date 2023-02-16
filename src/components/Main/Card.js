// Packages imports
import { func, string } from 'prop-types';

function Card(props) {
  const { handleCardClick, cardImage } = props;

  return (
    <button
      type="button"
      className="my-3 mx-4 w-[14%] drop-shadow-md saturate-50 transition ease-in-out active:scale-125 active:saturate-100 lg:drop-shadow-xl lg:hover:scale-110 lg:hover:saturate-100"
      onClick={handleCardClick}
    >
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
