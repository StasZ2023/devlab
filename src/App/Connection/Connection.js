import * as styles from './Connection.module.css'
import {soobshchenie,simvol,telegramma,whatsapp,logo2,mobilnyj} from '../../Images'
const Connection = ({setContact}) =>{
    return(
        <>
        <div className={styles.connection} id='contact'>
            <h2 className={styles.h2}>
                <img src={soobshchenie}/> 
                    Свяжитесь со мной
            </h2>
            <div className={styles.block}>
                <div className={styles.item}>
                    <div className={styles.info}>
                    <h3>Есть идея проекта?</h3>
                    <p>Напишите мне, и я помогу <br/>её реализовать.</p>
                    </div>
                    <div className={styles.connect}>
                        <a href="mailto:stas180797@gmail.com?subject=Разработка%20сайта&body" title=''>
                            <img src={soobshchenie}/>Gmail.com</a>
                        <a href='https://t.me/Staszykow' target="_blank" 
                        rel="noopener noreferrer"
                        title=''><img src={telegramma}/>Telegram</a>
                        <a href="https://wa.me/79114694549"
                            target="_blank"
                                rel="noopener noreferrer" title=''><img src={whatsapp}/>Whatsapp</a>
                        <a href='tel:+79114694549' title=''><img src={mobilnyj}/>Позвонить</a>
                    </div>
                </div>
                <div className={styles.btnImg}>
                        <div className={styles.imgbtn}>
                            <img src={logo2}/>
                        </div>
                    <div>
                    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setContact(true)}>
                        <img src={simvol}/><span>Обсудить проект</span></button>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Connection;