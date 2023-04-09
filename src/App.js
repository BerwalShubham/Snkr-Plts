import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./components/Banner";
import SnkrNavbar from "./components/SnkrNavbar";
import ProductDetail from "./components/ProductDetail";
import SideStep from "./components/SideStep";
import ExtraInformation from "./components/ExtraInformation";
import RelatedProducts from "./components/RelatedProducts";
import SnkrFooter from "./components/SnkrFooter";
import logo from "../src/assets/svg/logo.svg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader-bg d-flex align-items-center justify-content-center">
          <div className="preloader">
            <img src={logo} alt="logo" />
          </div>
        </div>
      ) : (
        <>
          <Banner />
          <SnkrNavbar />
          <ProductDetail />
          <SideStep />
          <ExtraInformation />
          <RelatedProducts />
          <SnkrFooter />
        </>
      )}
    </>
  );
}

export default App;
