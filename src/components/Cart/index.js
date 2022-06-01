import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./style.css";
function Cart({ currentSale, removeHandleClick, setCurrentSale }) {
  return (
    <div className="CardCart">
      <h1>Carrinho de compras</h1>
      <div className="CardItens">
        {currentSale?.map((current) => (
          <CartProduct
            current={current}
            removeHandleClick={removeHandleClick}
          />
        ))}
      </div>
      <div>
        <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    </div>
  );
}

export default Cart;
