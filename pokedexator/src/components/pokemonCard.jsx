function PokemonCard(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.image} alt={props.pokemon.name} />
    </div>
  );
}


export default PokemonCard;