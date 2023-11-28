import BurgerMenu from './components/BurgerMenu';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App" id="outer-container">
      <BurgerMenu />
      <div id="page-wrap">
        <header className="App-header">
          <h1>Welcome to My App</h1>
        </header>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
