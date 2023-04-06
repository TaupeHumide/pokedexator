import './App.css'
import PokemonCard from './components/pokemonCard'
import React from "react";
import PropTypes from "prop-types";


function App() {
  
  const pokemonList = [
    { name: "Pikachu", image: "https://www.pokebip.com/pokedex-images/ecarlate-violet/300/25.png?v=ev2" },
    { name: "Charizard", image: "https://www.pokebip.com/pokedex-images/ecarlate-violet/300/6.png?v=ev2" },
    { name: "Squirtle", image: "https://www.pokebip.com/pokedex-images/300/7.png?v=ev2" },
    { name: "Mew"}
  ];

  PokemonCard.propType = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string
    }).isRequired,
  }


  return (
    <div>
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  )
}

export default App;
