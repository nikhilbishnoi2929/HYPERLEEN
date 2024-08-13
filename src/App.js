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

function App() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Label />
      {/* <Segmentation /> */}
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
