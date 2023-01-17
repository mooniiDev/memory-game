// Packages imports
import { useState } from 'react';

// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // State of scores
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  // Function to update scores
  const updateScore = () => {
    setScore();
  };

  return (
    <div id="App" className="text-center">
      <Header currentScore={score.currentScore} bestScore={score.bestScore} />
      <Main updateScore={updateScore} />
      <Footer />
    </div>
  );
}

export default App;
