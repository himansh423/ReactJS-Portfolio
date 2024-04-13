import Header from "./components/Header";
import "./App.css";
import BackImage from "./components/BackImage";
import Detail from "./components/Detail";
import ProjectSection from "./components/ProjectSection";
import ContextProvider from "./store/Context-api";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <BackImage />
        <Detail />
        <ProjectSection />
        <Footer/>
      </ContextProvider>
    </>
  );
}

export default App;
