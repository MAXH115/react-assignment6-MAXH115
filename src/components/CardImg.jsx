import drawers from '../images/drawers.jpg'
import styles from './CardImg.module.css'

const CardImg = () => {
  return (
    <div>
      <img src={drawers} alt="drawers" className={styles.img} />
    </div>
  )

};


export default CardImg;
