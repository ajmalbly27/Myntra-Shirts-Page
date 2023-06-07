import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import './Product.css';

const Product = () => {
    const { filteredProducts } = useContext(AppContext);

    return(
        <div className="products-wrapper">
            {
               filteredProducts.map((eachProduct, index) => {
                    return(
                     <div className="product-image">
                        <img src={eachProduct.otherImages[0]} alt="Product-img"/>
                        <div style={{marginLeft:15}}>{eachProduct.name}</div>
                        <div style={{marginLeft:15}}><i>{eachProduct.description}</i></div>
                        <div className="product-details">
                            <span className="final-price">Rs. {eachProduct.finalPrice} </span>
                            <span className="strick-price">Rs.{eachProduct.strickPrice}</span>
                            <span className="discount"> ({eachProduct.discount}% OFF)</span>
                        </div>
                     </div>   
                    )
               }) 
            }
        </div>
    )
}
export default Product;