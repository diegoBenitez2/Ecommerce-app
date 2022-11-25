// import Button from "@atoms/Button/Button";
// import Checkbox from "@atoms/Checkbox/Checkbox";
// import InpuText from "@atoms/InputText/InpuText";
// import Stepper from "@atoms/Stepper/Stepper";
// import FeatureCard from "@atoms/FeatureCard/FeatureCard";
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
      {/* <Button className="background-dark-primary" />
      <Checkbox id='sofa' name='filter' onchange={handleForm} value={'Sofas'}/>
      { form.filter }
      <InpuText name='text' value={form.text} oninput={handleForm} />
      <Stepper name='count' value={form.count} onstep={handleForm} />
      <FeatureCard title='Esto es un titulo' desc='Esta es la descripcion de la la card.' /> */}
      <ProductCard   
            id={1}
            link='https://freepngimg.com/png/563-chair-png-image'
            title='The Daily chair'
            price={250}
            urlImage='https://th.bing.com/th/id/R.586be63c1a0c3e1a295e5d2cef816705?rik=kZ2Z70hOiz8%2bNw&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fchair%2f44-chair-png-image.png&ehk=B6V7bRa2aaC%2feycSQYDyGP%2b3IsVn8LJ5VwFSePWQEEI%3d&risl=&pid=ImgRaw&r=0'
            altImage='chair image'
            addShoppingCard={handleForm} />
    </div>
  );
}

export default App;
