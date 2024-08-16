import "./App.css";
import Exclusive from "./components/Exclusive";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Label from "./components/Label";
import Polygon from "./components/Polygon";
import Quality from "./components/Quality";
import Segmentation from "./components/Segmentation";
import System from "./components/System";
import Team from "./components/Team";
import BottomTop from "./components/BottomTop";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
       easing: 'ease-in-sine',
       delay: 100,
    });
  }, []);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`overflow-hidden mx-auto ${
      screenWidth > 1920 ? "max-w-[1920px]" : ""
    }`}>
      <Header />
      <Label />
      <Segmentation />
      <Team />
      <System />
      <Quality />
      <Polygon />
      <Faqs />
      <Exclusive />
      <Footer />
      <BottomTop />
    </div>
  );
}
export default App;
