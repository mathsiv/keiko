import styles from "./PokemonInfo.module.css"

interface Props {
    name: string
    id: number
    weight: number
    height: number
} 

export const PokemonInfo = ({name, id, weight, height}: Props) => {
    let imgF: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    let imgB: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
    let imgSF: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
    let imgSB: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`

    let pokename = name.charAt(0).toUpperCase() + name.slice(1)

    return(
    <div className={styles.box}>
    <div className = {styles.name}> {pokename} </div>
    <div className = {styles.img}>
    <img src = {imgF} alt = {`front of ${pokename}`}/> 
    <img src = {imgB} alt = {`back of ${pokename}`}/> 
    </div>
    <div className = {styles.img}>
    <img src = {imgSF} alt = {`front of shiny ${pokename}`}/> 
    <img src = {imgSB} alt = {`front of shiny ${pokename}`}/> 
    </div>
    <div className = {styles.p}>
    <p> Number = {id} </p>
    <p> Weight = {weight} kg </p>
    <p> Height = {height} cm</p>
    </div>
    </div>
    )
  }
