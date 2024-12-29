import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Blog from "../src/components/Blog/Blog";
import Footer from "./components/Pages/Footer";
import LastFooter from "../../coinbak/src/components/LastFooter";
import AboutMenu from "./components/Pages/AboutMenu";
import Support from "./components/Pages/Support";
import Developer from "./components/Pages/Developer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMenu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
      <Footer />
      <LastFooter cl />
    </div>
  );
};

export default App;
