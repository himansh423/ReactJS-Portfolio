import "./App.css";
import ContextProvider from "../store/Context-api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
