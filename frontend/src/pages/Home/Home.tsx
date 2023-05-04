import styles from "./Home.module.css";
import React, {useState, useEffect} from "react";
import {Pokemon} from 'components/Pokemon';

const pokemonList = [
  {
    name: 'Carapuce',
    id: 7,
  },
  {
    name: 'Carabaffe',
    id: 8,
  },
  {
    name: 'Tortank',
    id: 9,
  },
];

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {

    const [pokemonList, updatePokemonList] = React.useState<PokemonInfo[]>([])
    const [filterValue, setFilterValue] = React.useState('');

  async function fetchPokemons () {
    const response = await fetch('http://localhost:8000/pokemons', { headers: { accept: "application/json" } })
    const responseJSON = await response.json()
    return responseJSON
    }

  useEffect(() => {fetchPokemons().then(pokemonData => updatePokemonList(pokemonData))})

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  };

  interface Pokemon {
    name: string
    id: number
    height: number
    weight: number

  }
  
  function filterPokemonsByName(pokemons: Pokemon[], filter: string) {
    const filteredList = pokemons.filter(pkm => (pkm.name).toLowerCase().includes(filter))
    return filteredList
  }
  
  return (
    <div className={styles.intro}>
    <div className={styles.text}>Pokedex !</div>
    <label> Search pokemons:
    <input className={styles.input} onChange={onInputChange} value={filterValue} />
    </label>
    <div className={styles.box}> 
    {filterPokemonsByName(pokemonList, filterValue).map(({name, id, height, weight}) => {
  return <Pokemon name={name} id={id} height={height} weight={weight} key={id}/>
})}
    </div>
    </div>
  );
  }
