// Packages imports
import { arrayOf, shape, string, bool, func } from 'prop-types';

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
            handleCardClick={() => handleCardClick(card.id)} // Pass unique ID from state as a prop
          />
        );
      })}
    </div>
  );
}

CardsList.propTypes = {
  deck: arrayOf(
    shape({
      name: string,
      id: string,
      isClicked: bool,
    })
  ).isRequired,

  handleCardClick: func.isRequired,
};

export default CardsList;
