// Components imports
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

// Styling imports
import '../styles/App.css';
import '../styles/Header.css';
import '../styles/Main.css';

function App() {
  return (
    <div id="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
