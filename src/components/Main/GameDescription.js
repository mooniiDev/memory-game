// Components imports
import Button from '../Button';

function GameDescription() {
  return (
    <div>
      <h2>
        Forge a garden, but let not the same blossom twice.
        <br />
        18 rare and exotic species of plants await your cultivation.
        <br />
        Successfully grow them all and ascend to the throne of the Floral
        Master!
      </h2>

      <Button
        type="button"
        buttonText="Clarify Gameplay Instructions"
        buttonClass="border-solid border-2 border-black"
      />

      <h2>
        Choose a card, but don&apos;t click on the same one twice.
        <br />
        Every correct choice gives you 1 score.
        <br />
        Collect 18 scores and become the Master of Plants!
      </h2>
    </div>
  );
}

export default GameDescription;
