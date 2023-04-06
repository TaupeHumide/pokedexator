function PokemonCard(props) {
  console.log(props);
  return (
    <figure>
      {props.pokemon.image ? <img src={props.pokemon.image} alt={props.pokemon.name} /> : <p> ??? </p>}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;