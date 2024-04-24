import styles from "./AboutTextOnImg.module.css";
import { FaLongArrowAltDown } from "react-icons/fa";
const AboutTextOnImg = () => {
  return (
    <>
      <p className={styles.greeting}>It's so great to meet you, I'm Himanshu :)   <FaLongArrowAltDown/></p>
    </>
  );
}

export default AboutTextOnImg;