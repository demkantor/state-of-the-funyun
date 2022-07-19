import funyun from './assets/single.png';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <h1>State of the Funyun</h1>
      </header>
      <main>
        <img src={funyun} alt={'the funyun'} />
      </main>
      <footer>
        <p>fjorge</p>
      </footer>
    </>
  );
}

export default App;
