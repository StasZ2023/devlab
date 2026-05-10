import * as styles from './You.module.css'
import {star,bolt,verified,serdtse,soob} from '../../Images'
const You = () =>{
    return (
        <>
            <div className={styles.you}>
                <h2>
                    <img src={star}/> 
                    Почему выбирают меня
                </h2>
                <div className={styles.block}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={bolt}/>
                    </div>
                    <div className={styles.text}>
                        <h3>Скорость</h3>
                        <p>Быстрая разработка <br/>без потери качества</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={verified}/>
                    </div>
                    <div className={styles.text}>
                        <h3>Надежность</h3>
                        <p>Чистый код и защита <br/>вашего проекта</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={serdtse}/>
                    </div>
                    <div className={styles.text}>
                        <h3>Индивидуальный подход</h3>
                        <p>Учитываю ваши цели <br/>и пожелания</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={soob}/>
                    </div>
                    <div className={styles.text}>
                        <h3>Всегда на связи</h3>
                        <p>Отвечаю быстро<br/> и по делу</p>
                    </div>
                </div>
            </div>
            </div>

            
        </>
    )
}

export default You;