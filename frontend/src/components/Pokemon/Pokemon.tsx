import styles from "./Pokemon.module.css"
interface Props {
    name: string
    id: number
    weight: number
    height: number
} 

export const Pokemon = ({name, id, weight, height}: Props) => {
    let img: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return(
    <div className={styles.box}>
    <img src = {img} alt = {name}/> 
    <p> Name = {name} </p>
    <p> Number = {id} </p>
    <p> Weight = {weight} kg </p>
    <p> Height = {height} cm</p>
    </div>
    )
  }
