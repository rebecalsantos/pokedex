const BestPokemon = (props) => {
  return (
  <div>
    <p>My favourite Pokemon is Squirtle</p>
     <ul>
        {props.name.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
  </div>
  );
};
export default BestPokemon;