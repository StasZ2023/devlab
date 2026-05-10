import * as styles from './Portfolio.module.css'
import { useState } from "react";
import {projects} from './img/Img';
const Portfolio = ({setPort}) =>{

     const [activeIndex, setActiveIndex] = useState(null)
    
    return(
        <>
        <div className={styles.port}>
  {projects.map((item, index) => (
    <>
    <div className={styles.item} key={index}>
        <button
              className={styles.len}
              onClick={() => setActiveIndex(index)}>
                <img src={item.scrin}/>
            </button>
      <div className={styles.text}>
        <h3>{item.title}</h3>
      </div>
    </div>
     {activeIndex === index && (
            <div className={styles.blockImg}>
              <p onClick={() => setActiveIndex(null)}>
                Закрыть
              </p>
              <img src={item.img} alt="" />
              <div className={styles.demo}><span>Demo <br/>Demo <br/>Demo</span></div>
            </div>

          )}
    </>
  ))}

</div>
            </>
    )
}

export default Portfolio;