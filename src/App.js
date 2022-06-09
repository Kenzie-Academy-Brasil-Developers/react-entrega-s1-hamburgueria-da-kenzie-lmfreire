/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";

import ProductsList from "./components/ProductsList";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
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
      toast.success("Item adicionado com sucesso", {
        duration: 1000,
      });
    } else {
      toast.error("Não pode adicionar o mesmo item");
    }
  }

  function removeHandleClick(id) {
    const found = currentSale.filter((elem) => {
      return elem.id !== id;
    });
    toast.success("Removido", {
      duration: 800,
    });
    setCurrentSale(found);
  }

  function filterProducs() {
    return filteredProducts.length > 0;
  }

  function findInput() {
    return userInput.length > 0;
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

      {findInput() && (
        <h1 className="ResultFind">
          Resultado para Busca: <span>{userInput}</span>
        </h1>
      )}

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
        <Toaster />
      </main>
    </div>
  );
}

export default App;
