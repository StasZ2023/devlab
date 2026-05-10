import { useState,  } from "react";
import * as styles from './Header.module.css'

const Header = ({portClose, setPort,setActiveIndex,active,setActive}) => {
     

      
    return(
        <>
        <div className={styles.head}>
    <header className={styles.header}>
        <a href='#top'>
  <div className={styles.logo}
  onClick={() => {
              setActive('about')
              setPort(false)
              setActiveIndex(null)
            }}
  >
  </div></a>
  <nav className={styles.nav}>
    <a href="#"
    className={active === 'you' ? styles.active : ''}
    onClick={() => {
              setActive('you')
              setPort(false)
              setActiveIndex(null)
            }}
    >Обо мне</a>
    <span></span>
    <a href="#" 
    className={` ${styles.desc} ${active === 'services' ? styles.active : ''}`}
    onClick={() => {setActive('services') 
        setPort(false)
        setActiveIndex(null)
        }}
    >Услуги</a>
    <a href="#top" 
    className={styles.mob}
    onClick={() => {setActive('about') 
        setPort(false)
        setActiveIndex(null)
    }}
    >Главная</a>
    
    
    <span></span>
    <a href="#" 
    className={active === 'port' ? styles.active : ''}
    
    onClick={() => {portClose()
        setActive('port')
        setActiveIndex(null)
    }}>Портфолио</a>
    <span></span>
    <a href="#worck" 
    className={active === 'worck' ? styles.active : ''}
    onClick={() => {
              setActive('worck')
              setPort(false)
              setActiveIndex(null)
            }}
    >Этапы</a>
    <span></span>
    <a href="#contact" 
    className={active === 'contact' ? styles.active : ''}
    onClick={() => {
              setActive('contact')
              setPort(false)
              setActiveIndex(null)
            }}
    >Контакты</a>
  </nav>
</header>
    </div>
        </>
    )

}
export default Header;