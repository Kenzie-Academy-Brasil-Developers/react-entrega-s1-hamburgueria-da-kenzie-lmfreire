import "./style.css";
function CartTotal({ currentSale, setCurrentSale }) {
  function totalPrice() {
    const value = currentSale.reduce((previousValue, currentValue) => {
      return previousValue + Number(currentValue.price);
    }, 0);
    return value;
  }

  return (
    <div className="CardPrice">
      <div>
        <h1>Total</h1>
        <p>{totalPrice().toFixed(2).replace(".", ",")}</p>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </div>
  );
}

export default CartTotal;
