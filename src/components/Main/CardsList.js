// Packages imports
import { arrayOf, string, func } from 'prop-types';

// Components imports
import Card from './Card';

function CardsList(props) {
  const { shuffledCards, shuffleCards } = props;

  return (
    <div>
      {shuffledCards.map((card) => {
        return (
          <Card cardNumber={card} key={card} shuffleCards={shuffleCards} />
        );
      })}
    </div>
  );
}

CardsList.propTypes = {
  shuffledCards: arrayOf(string).isRequired,
  shuffleCards: func.isRequired,
};

export default CardsList;
