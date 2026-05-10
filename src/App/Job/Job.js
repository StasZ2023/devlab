import * as styles from './Job.module.css'
import { useState } from "react";
import {folder} from '../../Images'
import {projects} from '../Portfolio/img/Img'
const Job =({activeIndex,setActiveIndex,setActive}) =>{


    
    return (
        <>
        <div className={styles.job}>
            <h2>
                <img src={folder}  className={styles.img}/>
                    Последние работы
                </h2>

                <div className={styles.block}>
                     {projects.slice(-4).map((item, index) => (<>
                     <div className={styles.item} key={index}>
                        <button
              className={styles.len}
              onClick={() => {setActiveIndex(index)
                setActive('about')}
              }>
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
                     </>))}
                    
                </div>
        </div>
        </>
    )
}
export default Job