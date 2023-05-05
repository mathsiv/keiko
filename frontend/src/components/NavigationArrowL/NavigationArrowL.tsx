import styles from "./NavigationArrowL.module.css"
import {Link} from 'react-router-dom';
import LeftArrow from "./left-arrow.png"

export const NavigationArrowL = ({page}: {page : string | undefined}) => {
    let pageNum = page !== undefined ? parseInt(page) : 1
    let link = `/pokedex/${pageNum-1}`

    return(
    <>
    <Link to={link}>
        <img
        className = {styles.img}
        src = {LeftArrow}
        alt="Previous page"
      />
    </Link>
    </>

    )
}
    