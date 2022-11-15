import Button from "@atoms/Button/Button";
import Checkbox from "@atoms/Checkbox/Checkbox";
import InpuText from "@atoms/InputText/InpuText";
import Stepper from "@atoms/Stepper/Stepper";
import FeatureCard from "@atoms/FeatureCard/FeatureCard";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({
    id: 1,
    link: '#',
    image: {
      url: '',
      alt: '',
    },
    title: 'The Daily chair',
    price: 250,
  });
  const handleCount = (step) => {
    setCount(step);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Button className="background-dark-primary" />
      <Checkbox />
      <InpuText />
      <Stepper value={count} handleStep={handleCount} />
      <FeatureCard />
      <ProductCard info={product} addShoppingCard={setProduct} />
    </div>
  );
}

export default App;
