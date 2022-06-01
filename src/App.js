/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";

import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  });

  function showProducts() {
    const filtro = products.filter((elem) => {
      return elem.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setFilteredProducts(filtro);
  }

  function handleClick(id) {
    const filteredId = currentSale.find((elem) => {
      return elem.id === id;
    });
    if (filteredId === undefined) {
      const found = products.find((elem) => {
        return elem.id === id;
      });
      setCurrentSale([...currentSale, found]);
    }
  }

  function removeHandleClick(id) {
    const found = currentSale.filter((elem) => {
      return elem.id !== id;
    });

    setCurrentSale(found);
  }

  function filterProducs() {
    return filteredProducts.length > 0;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Burguer <span>Kenzie</span>
        </h1>

        <div className="InputSearch">
          <form onKeyUp={(event) => showProducts(event.preventDefault())}>
            <input
              placeholder="Digitar Pesquisa"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />

            <button type="submit">Pesquisar</button>
          </form>
        </div>
      </header>

      <main className="MainCards">
        {filterProducs() ? (
          <ProductsList products={filteredProducts} handleClick={handleClick} />
        ) : (
          <ProductsList products={products} handleClick={handleClick} />
        )}
        <Cart
          currentSale={currentSale}
          removeHandleClick={removeHandleClick}
          setCurrentSale={setCurrentSale}
        />
      </main>
    </div>
  );
}

export default App;