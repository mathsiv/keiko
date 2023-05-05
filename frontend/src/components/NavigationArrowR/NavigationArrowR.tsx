import styles from "./NavigationArrowR.module.css"
import {Link} from 'react-router-dom';
import RightArrow from "./right-arrow.png"

export const NavigationArrowR = ({page}: {page : string | undefined}) => {
  let pageNum = page !== undefined ? parseInt(page) : 1
  let link = `/pokedex/${pageNum+1}`

  return(
  <>
  <Link to={link}>
      <img
      className = {styles.img}
      src = {RightArrow}
      alt="Next page"
    />
  </Link>
  </>

  )
}
  