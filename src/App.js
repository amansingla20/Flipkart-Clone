import "./App.css";
import Header from "./components/Header";
import { Data } from "./Data";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import SecondNav from "./components/SecondNav";

function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    filter("");
  }, []);

  const filter = (names) => {
    const filtered = Data.filter((item) => {
      return item.name.includes(names) ? true : null;
    });
    console.log(filtered);
    setCategory(filtered);
  };

  return (
    <div className="app">
      <Header />
      <SecondNav />
      <div className="image-after-second-nav">
        <img
          src="https://rukminim1.flixcart.com/www/3376/3376/promos/30/04/2021/db07844f-6b26-48aa-ab7c-67011d04fe6e.png?q=90"
          alt=""
        />
      </div>
      <Carousel />
      <div className="Products">
        {category.map((item) => (
          <Card
            key={item.id}
            rating={item.rating}
            image={item.image}
            name={item.name}
            offerPrice={item.offerPrice}
            actualPrice={item.actualPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
