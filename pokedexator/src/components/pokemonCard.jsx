import React from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard(props) {
  console.log(props);
  const pokemon = props.pokemon;
  return (
    <div>
      <figure>
        {pokemon.imgSrc ?
          <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}


export default PokemonCard;
