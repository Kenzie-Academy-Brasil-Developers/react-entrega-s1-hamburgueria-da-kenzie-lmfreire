import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./style.css";
function Cart({ currentSale, removeHandleClick, setCurrentSale }) {
  function currentSaleExist() {
    return currentSale.length > 0;
  }

  return (
    <div className="CardCart">
      <h1>Carrinho de compras</h1>
      <div className="CardItens">
        {currentSaleExist() ? (
          currentSale?.map((current) => (
            <CartProduct
              current={current}
              removeHandleClick={removeHandleClick}
            />
          ))
        ) : (
          <div className="CartEmpty">
            <h1>Sua sacola está vazia</h1>
            <p>Adicione itens</p>
          </div>
        )}
      </div>
      <div>
        {currentSaleExist() && (
          <CartTotal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
