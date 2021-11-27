// import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Button from "./components/button/Button";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
   <div>
      <Intro/> 
      <About /> 
      <ProductList/>
      <Button/> 
      <Contact/> 
    </div>
  );
};

export default App;