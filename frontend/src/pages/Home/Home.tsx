import styles from "./Home.module.css"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Pokemon } from "components/Pokemon"
import { Loader } from "components/Loader/Loader"
import { NavigationArrowL } from "components/NavigationArrowL"
import { NavigationArrowR } from "components/NavigationArrowR"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

export const Home = () => {
  let page = useParams()
  let pageNum = page.page !== undefined ? parseInt(page.page) : 0

  const [isLoading, setLoading] = useState(true)
  const [pokemonList, updatePokemonList] = useState<PokemonInfo[]>([])
  const [filterValue, setFilterValue] = useState("")
  const [isError, setError] = useState(false)

  async function fetchPokemons() {
    const response = await fetch(`http://localhost:8000/pokemons?page=${page.page}`, {
      headers: { accept: "application/json" },
    })
    const responseJSON = await response.json()
    setLoading(false)
    return responseJSON
  }

  useEffect(() => {
    fetchPokemons()
      .then(pokemonData => updatePokemonList(pokemonData))
      .catch(() => {
        console.log("error! Request failed")
        setError(true)
      })
  })


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  interface Pokemon {
    name: string
    id: number
    height: number
    weight: number
  }

  function filterPokemonsByName(pokemons: Pokemon[], filter: string) {
    const filteredList = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filter))
    return filteredList
  }

  return (
    <div className={styles.intro}>
      <div className={styles.text}>Pokedex !</div>
      <label>
        {" "}
        Search pokemons:
        <input className={styles.input} onChange={onInputChange} value={filterValue} />
      </label>
      <div className={styles.arrows}>
        {pageNum > 0 ? <NavigationArrowL page={page.page} /> : null}
        {pageNum < 10 ? <NavigationArrowR page={page.page} /> : null}
      </div>
      {isError ? (
        <div className={styles.errorText}> Sorry, we couldn't get to your pokemons... </div>
      ) : isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <div className={styles.box}>
          {filterPokemonsByName(pokemonList, filterValue).map(({ name, id, height, weight }) => {
            return <Pokemon name={name} id={id} height={height} weight={weight} key={id} />
          })}
        </div>
      )}
    </div>
  )
}
