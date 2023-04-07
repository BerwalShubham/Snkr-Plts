import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Banner from "./components/Banner";
import SnkrNavbar from "./components/SnkrNavbar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Banner />
      <SnkrNavbar />
      <ProductDetail />
    </>
  );
}

export default App;
