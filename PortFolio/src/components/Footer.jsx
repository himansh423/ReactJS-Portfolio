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
      <a href="" className={styles.touch} onMouseLeave={onMouseLeaveFooter} onMouseOver={onMouseOverFooter}>👋LET'S GET IN TOUCH!</a>
      <div className={styles.overlay} style={intStyle}></div>
      <div className={styles.container}>
        <a href="#"><img src={linkedin}/></a>
        <a href="#"><img src={x}/></a>
        <a href="#"><img src={instagram}/></a>
      </div>
      <p>★ CODED WITH <span>LOVE</span> BY HIMANSHU CHAUHAN ★</p>
    </footer>
  );
}

export default Footer;