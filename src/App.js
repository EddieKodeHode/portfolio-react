import logo from './logo.svg';
import './App.css';
import Nav from './content/Nav.js';
import Logo from './content/Logo.js';
import LandingPage from './content/LandingPage.js'

function App() {
  return (
      <>
    <header>
      <Logo />
      <Nav />
    </header>
    <LandingPage />
    </>
  );
}

export default App;
