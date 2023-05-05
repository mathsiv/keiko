import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import styles from "./Pokemon.module.css"

import { PokemonInfo } from 'components/PokemonInfo';
import { Loader } from "components/Loader/Loader";


interface PokemonInfo {
    id: number
    name: string
    height: number
    weight: number
  }

export const Pokemon = () => {
  let { id } = useParams();
  //let id = 1

  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [pokemonInfo, updatePokemonInfo] = useState<PokemonInfo>({id: 0,name: '', height: 0, weight: 0})

  async function fetchOnePokemon () {
    const response = await fetch(`http://localhost:8000/pokemon/${id}`, { headers: { accept: "application/json" } })
    const responseJSON = await response.json()
    return responseJSON
    }

  useEffect(() => {
    fetchOnePokemon()
    .then(pokemonData => updatePokemonInfo(pokemonData))
    .then(() => setLoading(false))
    .catch(() => {
      console.log("error! Request failed")
      setError(true)
    })
  }
    )

  return (
    <>
    {isError ? 
        (<div className={styles.errorText}> Sorry, we couldn't get to your pokemon... </div>)
        : isLoading ? (<div className={styles.loader}>
          <Loader/>
        </div>):(
    <div className = {styles.box}>
    <PokemonInfo name = {pokemonInfo.name} id = {pokemonInfo.id} weight = {pokemonInfo.weight} height={pokemonInfo.height}/>
    </div>)}
    </>
  )
  
}
