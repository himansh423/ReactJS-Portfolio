import { createContext, useState } from "react";
import img from "../assets/frontPage.png";
import codevol from "../assets/codevault.jpeg";
import playpal from "../assets/playPals.jpeg";
import portJs from "../assets/portJs.jpeg";
import reactJS from "../assets/reactJS.jpeg";
import amaz from "../assets/amaz.jpeg";
import biopage from "../assets/biopage.jpeg";

export const Context = createContext({
  handleOnMouseOver: () => {},
  projectList: [],
});



const ContextProvider = ({ children }) => {
  const [styling, udpateStyles] = useState({});
 const [intStyle,setIntStyle] = useState({

 })

 const onMouseLeaveFooter = () => {
  setIntStyle({
    transform: "translateY(-15px)"
  })
}

const onMouseOverFooter = () => {
  setIntStyle({
    transform: "translateY(0px)"
  })
}

  const udpateStylesOver = (itemId) => {
    udpateStyles((prevStyles) => ({
      ...prevStyles,
      [itemId]: {
        transform: "translateY(0px)",
        transition: "transform 0.3s ease-in-out",
      },
    }));
  };

  const udpateStylesLeave = (itemId) => {
    udpateStyles((prevStyles) => ({
      ...prevStyles,
      [itemId]: {
        transform: "translateY(300px)",
        transition: "transform 0.3s ease-in-out",
      },
    }));
  };

  const projectList = [
    {
      link: "#",
      photo: codevol,
      name: "CodeVault.com",
      id: "1",
    },
    {
      link: "#",
      photo: playpal,
      name: "PlayPals.com",
      id: "2",
    },
    {
      link: "#",
      photo: portJs,
      name: "Portfolio",
      id: "3",
    },
    {
      link: "#",
      photo: reactJS,
      name: "React-Portfolio",
      id: "4",
    },
    {
      link: "#",
      photo: amaz,
      name: "Amazon-Clone",
      id: "5",
    },
    {
      link: "#",
      photo: biopage,
      name: "BioPage-React",
      id: "6",
    },
  ];

  return (
    <Context.Provider
      value={{
        projectList,
        udpateStylesOver,
        udpateStylesLeave,
        styling,
        intStyle,
        onMouseLeaveFooter,
        onMouseOverFooter
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
