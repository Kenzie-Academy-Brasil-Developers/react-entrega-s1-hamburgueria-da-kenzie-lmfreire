import Product from "../Product";
import "./style.css";

function ProductsList({products, handleClick}) {
  return (
    <div className="Cards">
      {products.map(product => <Product product={product} handleClick={handleClick}/>)}      
    </div>
  );
}

export default ProductsList;
