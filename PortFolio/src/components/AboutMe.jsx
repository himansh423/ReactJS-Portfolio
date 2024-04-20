import styles from "./AboutMe.module.css";
import img from "../assets/DP.jpg";
import img2 from "../assets/imageofme.jpg";
import { Link } from "react-router-dom"; 
import { useContext } from "react";
import { Context } from "../store/Context-api";
const AboutMe = () => {

  const {sethome,tab} = useContext(Context);
  return (
    <main>
      <div className={styles.parent1}>
        <div className={styles.container1}>
          <div className={styles.childContainer1}>
            <h2 className={styles.tag}>About Me</h2>
            <h2 className={styles.hello}>Hello!</h2>
            <p className={styles.Description}>
              Hello! I'm{" "}
              <span className={styles.himanshuSpan}>Himanshu Chauhan</span>, a
              dedicated{" "}
              <span className={styles.himanshuSpan}>Frontend Developer</span>,
              currently pursuing a Bachelor's degree in{" "}
              <span className={styles.bach}>Computer Applications (BCA)</span>{" "}
              with a specialization in{" "}
              <span className={styles.data}>Data Science</span> from Amity
              Online. My educational journey began with completing my secondary
              education in 2020-21 followed by senior secondary education in
              2022-23, both under the Central Board of Secondary Education.
            </p>
          </div>
          <img src={img} className={styles.img} />
        </div>
        <p className={styles.skill}>
          <p className={styles.skillTag}>Skills</p>
          Proficient in a range of technologies including{" "}
          <span className={styles.html}>HTML</span> ,
          <span className={styles.css}> CSS</span> ,{" "}
          <span className={styles.boot}>Bootstrap</span>,
          <span className={styles.java}> JavaScript</span>,{" "}
          <span className={styles.react}>ReactJS</span>,
          <span className={styles.c}> C language</span> , and{" "}
          <span className={styles.dsa}>
            {" "}
            Data Structures & Algorithms (DSA)
          </span>
          . I also have hands-on experience with version control systems such as{" "}
          <span className={styles.git}>Git and GitHub</span>. Additionally, I
          possess knowledge in{" "}
          <span className={styles.excel}>Microsoft Excel</span> and{" "}
          <span className={styles.point}>PowerPoint</span>.
        </p>
        <p className={styles.experience}>
          <p className={styles.experienceTag}>Experience</p>
          Throughout my journey, I've undertaken various projects showcased in
          the{" "}
          <Link to={"/"} className={`${styles.work}  ${ tab==="home" ? styles.colorWork : ''}`} onClick={sethome}>
            work
          </Link>{" "}
          section of my portfolio, demonstrating my skills and passion for
          development.
        </p>
        <p className={styles.approach}>
          <p className={styles.approachTag}>Approach</p>I thrive in
          collaborative environments, always pushing myself to learn and grow
          while embracing fresh challenges and opportunities. Let's connect and
          explore how we can work together to bring your ideas to life!
        </p>
      </div>
      <div className={styles.now}>
        <div className={styles.current}>
          <img src={img2} alt="" className={styles.img2} />
          <div className={styles.currBox}>
            <p className={styles.curr}>CURRENTLY</p>

            <li>
              Learning <span className={styles.node}>Node.js</span>,
              <span className={styles.DB}> MongoDB</span>, <span className={styles.exp}>ExpressJs</span> and other Backend
              Technologies.
            </li>
            <li>Working on Fitness.</li>
            <li>Building Projects.</li>
            <li>Creating Network.</li>
            <li>
              <span className={styles.net}>Netflix</span> And Chill.
            </li>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
