import { createContext, useReducer, useState } from "react";
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


const setTabReducer = (currTab,action) => {
  let newTab = currTab;
  if(action.type ==="SET_HOME"){
    newTab="home";
  }
 else if(action.type ==="SET_ABOUT"){
    newTab="about";
  }
  else if(action.type ==="SET_RESUME"){
    newTab="resume";
  }
  else if(action.type ==="SET_CONTACT"){
    newTab="contact";
  }

  return newTab;
}
const ContextProvider = ({ children }) => {
  const [styling, udpateStyles] = useState({});
  const [styling2, udpateStyles2] = useState({});
  const [intStyle, setIntStyle] = useState({});

 const [tab, dispatchTab] =useReducer(setTabReducer,"home")
 const sethome = () => {
  dispatchTab({
    type:"SET_HOME",
  })
 }

 const setAbout = () => {
  dispatchTab({
    type:"SET_ABOUT",
  })
 }
 const setResume = () => {
  dispatchTab({
    type:"SET_RESUME",
  })
 }
 const setContact = () => {
  dispatchTab({
    type:"SET_CONTACT",
  })
 }

  const onMouseLeaveFooter = () => {
    setIntStyle({
      transform: "translateY(-15px)",
    });
  };

  const onMouseOverFooter = () => {
    setIntStyle({
      transform: "translateY(0px)",
    });
  };

  const udpateStylesOver = (itemId) => {
    udpateStyles((prevStyles) => ({
      ...prevStyles,
      [itemId]: {
        transform: "translateY(0px)",
        transition: "transform 0.3s ease-in-out",
      },
    }));
    udpateStyles2((prevStyles) => ({
      ...prevStyles,
      [itemId]: {
        height: "450px",
        width: "625px",
        zIndex: "2",
        margin: "5px",
        background:
          " linear-gradient(to right, rgba(0, 102, 204, 0.5), rgba(255, 102, 0, 0.5), rgba(0, 51, 102, 0.5))",
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
    udpateStyles2((prevStyles) => ({
      ...prevStyles,
      [itemId]: {
        height: "434px",
        width: "600px",
        zIndex: "2",
        margin: "5px",
        background:
          "none", 
      },
    }));
  };

  const projectList = [
    {
      link: "https://github.com/himansh423/CodeVault.com",
      photo: codevol,
      name: "CodeVault.com",
      id: "1",
    },
    {
      link: "https://github.com/himansh423/PlayPals.com",
      photo: playpal,
      name: "PlayPals.com",
      id: "2",
      
    },
    {
      link: "https://github.com/himansh423/My-Portfolio",
      photo: portJs,
      name: "Portfolio",
      id: "3",
    },
    {
      link: "https://github.com/himansh423/ReactJS-Portfolio",
      photo: reactJS,
      name: "React-Portfolio",
      id: "4",
    },
    {
      link: "https://github.com/himansh423/Amazon-Clone",
      photo: amaz,
      name: "Amazon-Clone",
      id: "5",
    },
    {
      link: "https://github.com/himansh423/BioPage-React",
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
        styling2,
        intStyle,
        onMouseLeaveFooter,
        onMouseOverFooter,
        sethome,
        tab,
        setAbout,
        setResume,
        setContact,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
