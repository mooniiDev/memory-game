// Packages imports
import { arrayOf, shape, func } from 'prop-types';

// Components imports
import Card from './Card';

function CardsList(props) {
  const { deck, handleCardClick } = props;

  return (
    <div>
      {deck.map((card) => {
        return (
          <Card
            cardName={card.name}
            key={card.id}
            handleCardClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}

CardsList.propTypes = {
  deck: arrayOf(shape({})).isRequired,
  handleCardClick: func.isRequired,
};

export default CardsList;
