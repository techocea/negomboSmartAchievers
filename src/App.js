import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero1 from "./Components/Home/Hero1";
import Hero2 from "./Components/Home/Hero2";
import English from "./Components/Home/English";
import Services from "./Components/Home/Services";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <English />
      <Services />
      <Footer />
    </>
  );
};
export default App;
