import * as styles from './Hero.module.css'
import {kont,simvol,verified,raketa,star} from '../../Images'
const Hero = ({setContact}) =>{
    return(
        <>
        <section className={styles.hero} id='top'>
  <div className={styles.heroText}>
    <h1>Создаю современные<br/>сайты под ключ</h1>
    <p className={styles.p}>От идеи до запуска и поддержки </p>
    <div className={styles.divBtn}>
    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() =>setContact(true)}>
      <img src={kont}/>Обсудить проект</button>
    <button className={`${styles.btn} ${styles.btnAccent}`}>
      <img src={simvol}/>Смотреть работы</button>
      </div>
      <div className={styles.plus}>
        <div className={styles.item}>
          <img className={styles.verified}src={verified}/>
          <p className={styles.itemP}>
            Надежно <br/>
            <span>чистый код</span>
          </p>
        </div>
        <div className={styles.item}>
          <img  className={styles.raketa}src={raketa}/>
          <p className={styles.itemP}>
            Быстро <br/>
            <span>Соблюдаю сроки</span>
          </p>
        </div>
        <div className={styles.item}>
          <img className={styles.star}src={star}/>
          <p className={styles.itemP}>
            Качественно <br/>
            <span>Продающий дизайн</span>
          </p>
        </div>
      </div>
  </div>
</section>
        </>
    )
}
export default Hero;