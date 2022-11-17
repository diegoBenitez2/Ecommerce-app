import Button from "@atoms/Button/Button";
import Checkbox from "@atoms/Checkbox/Checkbox";
import InpuText from "@atoms/InputText/InpuText";
import Stepper from "@atoms/Stepper/Stepper";
import FeatureCard from "@atoms/FeatureCard/FeatureCard";
import ProductCard from "@atoms/ProductCard/ProductCard";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    count: 0,
    filter: '',
    text: '',
    product: {
      id: 1,
      link: '#',
      image: {
        url: '',
        alt: '',
      },
      title: 'The Daily chair',
      price: 250,
    },
  });
  const handleForm = (target) => {
    // eslint-disable-next-line no-debugger
    setForm({...form, 
      [target.name]: target.value
    });
  };


  return (
    <div className="App">
      <h1>Hello React</h1>
      <Button className="background-dark-primary" />
      <Checkbox id='sofa' name='filter' onchange={handleForm} value={'Sofas'}/>
      { form.filter }
      <InpuText name='text' value={form.text} oninput={handleForm} />
      <Stepper name='count' value={form.count} onstep={handleForm} />
      <FeatureCard title='Esto es un titulo' desc='Esta es la descripcion de la la card.' />
      <ProductCard  info={form.product} addShoppingCard={handleForm} />
    </div>
  );
}

export default App;
