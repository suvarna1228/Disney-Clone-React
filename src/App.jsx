import ProductionHouse from './Components/ProductionHouse';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import GenresMovieList from './Components/GenresMovieList';

function App() {

  return (
    <div className=''>
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenresMovieList/>
    </div>
  );
}

export default App;

