import { useContext } from "react";
import styles from "./ProjectSection.module.css";
import { Context } from "../store/Context-api";

const ProjectSection = () => {
  const { udpateStylesOver, udpateStylesLeave, styling, projectList,styling2 } =
    useContext(Context);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.project}>
          <p className={styles.line}></p>
          <p className={styles.myPRO}>My Projects</p>
          <p className={styles.line}></p>
        </div>
        <div className={styles.container}>
          {projectList.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={styles.coding}
              onMouseOver={() => udpateStylesOver(item.id)}
              onMouseLeave={() => udpateStylesLeave(item.id)}
            >
              <img src={item.photo} alt="" />
              <div className={styles.overlay} style={styling2[item.id] || {}}></div>
              <h1 className={styles.name} style={styling[item.id] || {}}>
                {item.name}
              </h1>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
