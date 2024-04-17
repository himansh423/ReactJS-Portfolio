import styles from "./Footer.module.css";
import instagram from "../assets/instagramlogo.png";
import linkedin from "../assets/linked.png";
import x from "../assets/twitter.png"
import { useContext } from "react";
import { Context } from "../store/Context-api";
const Footer = () => {

  const {onMouseLeaveFooter,intStyle,onMouseOverFooter}=useContext(Context);

  return (
    <footer>
      <a href="mailto:himanshuchau423@gmail.com" className={styles.touch} onMouseLeave={onMouseLeaveFooter} onMouseOver={onMouseOverFooter}>👋LET'S GET IN TOUCH!</a>
      <div className={styles.overlay} style={intStyle}></div>
      <div className={styles.container}>
        <a href="www.linkedin.com/in/himanshu-chauhan423"><img src={linkedin}/></a>
        <a href="https://twitter.com/Himansh423"><img src={x}/></a>
        <a href="https://insta.openinapp.co/6nrwn"><img src={instagram}/></a>
      </div>
      <p className={styles.love}>★ CODED WITH <span className={styles.span}>LOVE</span> BY HIMANSHU CHAUHAN ★</p>
    </footer>
  );
}

export default Footer;