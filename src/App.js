import { BrowserRouter, Link, Route } from 'react-router-dom'
import PokedexContainer from './components/PokedexContainer'
import PokemonScreen from './components/PokemonScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={PokedexContainer}/>
        <Route path='/pokemons/:id' component={PokemonScreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
