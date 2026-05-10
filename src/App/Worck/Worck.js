
import * as styles from './Worck.module.css'
import {trudo,soob,grafik,bufer,rocket,naushniki,strelka} from '../../Images'
const Worck = () =>{
    return(
        <>
        <div className={styles.worck} id='worck'>
            <h2>
                <img src={trudo} className={styles.img}/>
                Как я работаю
            </h2>
            <div className={styles.block}>
                <div className={styles.rom}>
                    <div className={styles.sircl}><img src={soob} className={styles.item}/></div>
                    <h3 className={styles.h3}>
                        1. Обсуждение
                    </h3>
                    <p className={styles.p}>
                        Изучаю задачу и ваши пожелания
                    </p>
                </div>
                <img src={strelka} className={styles.strelka}/>
                <div className={styles.rom}>
                    <div className={styles.sircl}>
                    <img src={grafik} className={styles.item}/>
                    </div>
                    <h3 className={styles.h3}>
                        2. Планирование
                    </h3>
                    <p className={styles.p}>
                        Составляю план работ и сроки
                    </p>
                </div>
                <img src={strelka} className={styles.strelka}/>
                <div className={styles.rom}>
                    <div className={styles.sircl}>
                    <img src={bufer} className={styles.item}/>
                    </div>
                    <h3 className={styles.h3}>
                        3. Дизайн и верстка
                    </h3>
                    <p className={styles.p}>
                        Создаю дизайн, верстаю и программирую
                    </p>
                </div>
                <img src={strelka} className={styles.strelka}/>
                <div className={styles.rom}>
                    <div className={styles.sircl}>
                    <img src={rocket} className={styles.item}/>
                    </div>
                    <h3 className={styles.h3}>
                        4. Запуск
                    </h3>
                    <p className={styles.p}>
                        Тестируем и запускаем сайт в работу
                    </p>
                </div>
                <img src={strelka} className={styles.strelka}/>
                <div className={styles.rom}>
                    <div className={styles.sircl}>
                    <img src={naushniki} className={styles.item}/>
                    </div>
                    <h3 className={styles.h3}>
                        5. Поддержка
                    </h3>
                    <p className={styles.p}>
                        Помогаю и сопровождаю про необходимости
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Worck;