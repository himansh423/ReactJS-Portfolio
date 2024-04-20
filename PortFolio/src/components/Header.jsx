import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useContext } from "react";
import { Context } from "../store/Context-api";



const Header = () => {
 const {sethome,setAbout,tab,setResume} = useContext(Context);

  return (
  <header>
    <Link to={"/"} className={`${styles.name}  ${ tab==="home" ? styles.colorName : ''}`} onClick={sethome} >Himanshu Chauhan</Link>
    <div className={styles.container}>
    <Link to={"/"} className={`${styles.link} ${styles.default} ${ tab==="home" ? styles.color : ''}`} onClick={sethome} >Work</Link>
      <Link to={"/about"} className={`${styles.link}  ${tab==="about" ? styles.color : ''}`} onClick={setAbout}>About</Link>
      <a href="https://drive.google.com/file/d/1SYBC3UjNql4Q8n29heeVdWs0vLNTjzcW/view?usp=drivesdk" className={`${styles.link} ${tab==="resume" ? styles.color : ''}`} onClick={setResume} >Resume</a>
    </div>
  </header>
  );
};

export default Header;
