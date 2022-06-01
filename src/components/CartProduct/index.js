/* eslint-disable jsx-a11y/alt-text */
import "./style.css";

function CartProduct({current , removeHandleClick}) {
  return (
    <div className="Cart" key={current.id}>
      <div className="ImgCart">
        <img src={current.img} />
      </div>
      <div className="Components">
        <div className="ComponentsCart">
          <h1>{current.name}</h1>
          <p className="CategoryCart">{current.category}</p>
        </div>
        <button onClick={() => removeHandleClick(current.id)}>Remover</button>
      </div>
    </div>
  );
}

export default CartProduct;
