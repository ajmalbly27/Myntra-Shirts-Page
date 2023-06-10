import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Cart.css";
import CartItem from "../CartItem/cartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import EmptyCartNavbar from "../EmptyCart/EmptyCartNavbar";

const Cart = () => {
    const { cart } = useContext(AppContext);

    return(
        <div className="cart-wrapper">            
            <EmptyCartNavbar />
            <div className="cart-container">
                <div>
                    {cart.length > 0 ? 
                        cart.map((product, i) => (
                            <CartItem product={product} key={i}/>
                        ))
                    :<div className="empty-cart">
                        <EmptyCart />
                    </div>
                    }
                </div>
                <div>
                    {   cart.length>0 &&
                        <div className="price-wrapper">
                            <div>PRICE DETAILS</div>
                            <div className="price-details">
                                <div>Total MRP</div>
                                <div>2000</div>
                            </div>
                            <div className="price-details">
                                <div>Discount on MRP</div>
                                <div>-1500</div>
                            </div>
                            <div className="price-details">
                                <div>Coupon Discount</div>
                                <div>Apply Coupon</div>
                            </div>
                            <div className="price-details">
                                <div>Convenience Fee</div>
                                <div>10</div>
                            </div>
                            <div className="price-details">
                                <div>Total Amount</div>
                                <div>500</div>
                            </div>
                            <div>
                                <button>PLACE ORDER</button>
                            </div>
                        </div>
                    }               
                </div>
            </div>
        </div>
    )
}
export default Cart;