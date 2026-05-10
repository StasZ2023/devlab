import { useEffect, useState } from "react";
import * as styles from "./App.module.css";
import Header from './header/Header'
import Hero from './Hero/Hero'
import Featured from "./Featured/Featured";
import Worck from "./Worck/Worck";
import Star from "./Star/Star";
import Job from "./Job/Job";
import You from "./You/You";
import Connection from "./Connection/Connection";
import Loading from "./Loading/Loading";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
export default function App() {

    const [loading, setLoading] = useState(window.innerWidth <= 430);
    const [contact, setContact] = useState(false);
    const [port, setPort] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
    const [active, setActive] = useState('')
  const portClose = () =>{
    setPort(!port)
  }
  useEffect(() => {
    // если экран больше 430 — loader не нужен
    if (window.innerWidth > 430) return;

    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        
      }, 2000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
    {loading ? <Loading/>:
    <>
    <Header 
    portClose={portClose}
    port={port}
    setPort={setPort}
    setActiveIndex={setActiveIndex}
    active={active}
    setActive={setActive}
    />
    <div className={styles.container}>
     <Hero 
     setContact={setContact}/>
      {contact ? <Contact setContat={setContact}/> : ''}
    <Featured/>
    <Worck/>
    <Job
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    setActive={setActive}
    />
    <You/>
    <Connection
    setContact={setContact}
    /> 
    { port ? <Portfolio portClose={portClose}/> : ''}
    <p className={styles.footer}>2026. Разработка сайтов с душой и вниманием к деталям.</p>
    </div>
    <Star/>
    </>
    }
    
    </>
   
  );
}