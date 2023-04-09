import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBottom from "./components/HeroBottom";
import Profise from "./components/Profise";

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
         <HeroBottom/>
          <Profise/>
    </div>
  );
}

export default App;
