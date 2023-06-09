import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import './Product.css';

const Product = () => {
    const { filteredProducts } = useContext(AppContext);
    // const { cart } = useContext(AppContext);
    const { addToCart } = useContext(AppContext);

    return(
        <div className="products-wrapper">
            {
               filteredProducts.map((eachProduct, index) => {
                    return(
                     <div className="product" key={index}>
                        <img src={eachProduct.otherImages[0]} alt="Product-img"/>
                        <div className="product-name">{eachProduct.name}</div>
                        <div className="product-description"><i>{eachProduct.description}</i></div>
                        <div className="product-details">
                            <span className="final-price">Rs. {eachProduct.finalPrice} </span>
                            <span className="strick-price">Rs.{eachProduct.strickPrice}</span>
                            <span className="discount"> ({eachProduct.discount}% OFF)</span>
                        </div>
                        <button className="btn" onClick={() => addToCart(eachProduct)}>ADD TO BAG</button>
                     </div>   
                    )
               }) 
            }
        </div>
    )
}
export default Product;