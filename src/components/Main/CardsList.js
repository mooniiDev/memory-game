// Components imports
import Card from './Card';

function CardsList() {
  const cards = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
  ];

  return (
    <div>
      {cards.map((card) => {
        return <Card cardNumber={card} key={card} />;
      })}
    </div>
  );
}

export default CardsList;
