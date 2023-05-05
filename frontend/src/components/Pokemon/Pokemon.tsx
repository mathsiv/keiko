import styles from "./Pokemon.module.css"
import {Link} from 'react-router-dom';

interface Props {
    name: string
    id: number
    weight: number
    height: number
} 

export const Pokemon = ({name, id, weight, height}: Props) => {
    let img: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    let link = `/pokemon/${id}`
    let pokename = name.charAt(0).toUpperCase() + name.slice(1)

    return(
    <div className={styles.box}>
    <div className={styles.name}> {pokename} </div>
    <Link to={link}>
    <img src = {img} alt = {name}/> 
    </Link>
    <p> Number = {id} </p>
    <p> Weight = {weight} kg </p>
    <p> Height = {height} cm</p>
    </div>
    )
  }
