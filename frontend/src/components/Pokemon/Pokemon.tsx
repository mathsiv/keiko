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

    return(
    <div className={styles.box}>
    <Link to={link}>
    <img src = {img} alt = {name}/> 
    </Link>
    <p> Name = {name} </p>
    <p> Number = {id} </p>
    <p> Weight = {weight} kg </p>
    <p> Height = {height} cm</p>
    </div>
    )
  }
