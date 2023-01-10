// Components imports
import GameDescription from './GameDescription';
import CardsList from './CardsList';

function Main() {
  return (
    <main id="Main" className="min-h-[calc(100vh-8rem)]">
      <GameDescription />
      <CardsList />
    </main>
  );
}

export default Main;
