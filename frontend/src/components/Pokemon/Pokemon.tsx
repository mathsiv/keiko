interface Props {
    name: string
    id: number
} 

export const Pokemon = ({name, id}: Props) => {
    let img: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return(
    <>
    <img src = {img} alt = {name}/> 
    <p> Name = {name} </p>
    <p> Number = {id} </p>
    </>
    )
  }
