function NavBar({onSelect, pokemonList}) {
    
  return <div>
  {pokemonList.map((pokemon, index) =>(
  <button key={index} onClick={() => onSelect(index)}>{pokemon.name}</button>
  ))}
  
  </div>

};

export default NavBar;