/* eslint-disable jsx-a11y/alt-text */
import "./style.css";

function Product({ product, handleClick }) {
  return (
    <div className="Card" key={product.id}>
      <div className="ImgDiv">
        <img src={product.img} />
      </div>
      <div className="ComponentsDiv">
        <h1>{product.name}</h1>
        <p className="Category">{product.category}</p>
        <p className="Price">{product.price.toFixed(2).replace(".", ",")}</p>
      </div>
      <button
        className="ComponentButton"
        onClick={() => handleClick(product.id)}
      >
        Adicionar
      </button>
    </div>
  );
}

export default Product;
