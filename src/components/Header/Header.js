// Components imports
import GameTitle from './GameTitle';
import ScoresSection from './ScoresSection';

function Header() {
  return (
    <header id="Header" className="flex justify-center gap-36">
      <GameTitle />
      <ScoresSection />
    </header>
  );
}

export default Header;
