import styles from "./Home.module.css"


export const Home = () => {
  return (
    <>
    <div>Bienvenue sur ton futur pokédex !</div>
    <div>
      Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
      pokemons !
    </div>
    <div>Commence par créer ton premier pokemon: </div>
    <div> 
    <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt = "Carapuce"/> 
    <p>Name: Carapuce</p>
    <p> Number: 7</p>
    </div>
    </>
  );
  }