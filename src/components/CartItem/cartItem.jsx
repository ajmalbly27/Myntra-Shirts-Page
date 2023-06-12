import React, { useContext } from "react";
import "./CartItem.css";
import retrun_logo from "../../images/return-button.png";
import { AppContext } from "../../context/AppContext";

const CartItem = ({ product }) => {

    const { increaseQuantity } = useContext(AppContext);
    const { decreaseQuantity } = useContext(AppContext);

    return (
        
        <div className="cart-product">
            <div className="cart-wrapper-item">
                <div className="item-image-text">
                    <div>
                        <img className="item-image" src={product.otherImages[0]} alt="product-img"/>
                    </div>
                    <div className="product-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-description"><i>{product.description}</i></div>
                        <div className="product-details">
                            <span className="final-price">Rs. {product.finalPrice} </span>
                            <span className="strick-price">Rs.{product.strickPrice}</span>
                            <span className="discount"> ({product.discount}% OFF)</span>
                        </div>
                        <div className="product-quantity">
                            <button className="minus" onClick={() => decreaseQuantity(product)}>-</button>
                            <span className="quantity-text">{`Qty : ${product.quantity}`}</span>
                            <button className="plus" onClick={() => increaseQuantity(product)}>+</button>
                        </div>
                        <div className="return-time">
                            <img src={retrun_logo} style={{width:15}} alt="return-icon"/>
                            <span> 14 days </span>
                            return available
                        </div>
                    </div>
                </div>
                <div className="cancel-button">X</div>
            </div>
        </div>

    )
    
}
export default CartItem;