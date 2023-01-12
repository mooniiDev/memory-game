// Components imports
import GameDescription from './GameDescription';
import Button from '../Button';
import CardsList from './CardsList';

function Main() {
  return (
    <main id="Main" className="min-h-[calc(100vh-8rem)]">
      <GameDescription />
      <Button
        type="button"
        buttonText="Play!"
        buttonClass="border-solid border-2 border-black"
      />
      <CardsList />
      <Button
        type="button"
        buttonText="Try Again!"
        buttonClass="border-solid border-2 border-black"
      />
    </main>
  );
}

export default Main;
