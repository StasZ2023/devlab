import * as styles from './Contact.module.css'
import { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({setContat}) => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
   
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        "service_m3ily3f",
        "template_s3ad7kv",
        form.current,
        "6z8TcYwLKD-tZSPne"
      )
      .then(
        () => {
          setShowMessage(true);
          form.current.reset(); 

    setTimeout(() => {
      setShowMessage(false);
      setLoading(false)
    }, 2000);
        },
        (error) => {
          {alert('ошибка')}
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.block}>
        <div className={`${showMessage ? styles.seva : styles.opacity}`}>Сообщение отправлено!</div> 
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <p>Отправить сообщение на почту</p>
        <button type='button' className={styles.close} onClick={() => setContat(false)}>X</button>
      <input type="text" name="name" placeholder="Имя" required />

      <input type="email" name="email" placeholder="Email" required />

      <textarea name="message" placeholder="Сообщение" required />

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Отправка..." : "Отправить"}
      </button>
    </form>
    </div>
  );
};

export default Contact;