import "./App.css";
import Header from "./components/Header";
import { Data } from "./Data";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

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
