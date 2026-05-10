import * as styles from './Featured.module.css'
import {portfel,kom,korzina,statya,gear} from '../../Images'
const Featured = () =>{
    return(
        <>
        <section className={styles.section}>
            <h2 className={styles.h2}><img src={portfel}/> Что я делаю</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <img className={styles.kom} src={kom}/>
                    <p>Лендинги</p>
                    <span>Продающие одностраничные сайты для привлечения клиентов</span>
                </div>
                <div className={styles.card}>
                    <img className={styles.korzina} src={korzina}/>
                    <p>Интернет-магазины</p>
                    <span>Полноценные магазины с корзиной, оплатой и админ-панелью</span>
                </div>
                <div className={styles.card}>
                    <img  className={styles.statya} src={statya}/>
                    <p>Корпоративные сайты</p>
                    <span>Сайты для компаний, которые повышают доверие и продажи</span>
                </div>
                <div className={styles.card}>
                    <img  className={styles.gear} src={gear}/>
                    <p>Доработка сайтов</p>
                    <span>Улучшение,исправление ошибок и добавление новых функций</span>
                </div>
            </div>
        </section>
        </>
    )
}
export default Featured;