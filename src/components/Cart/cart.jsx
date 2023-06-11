import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Cart.css";
import CartItem from "../CartItem/cartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import EmptyCartNavbar from "../EmptyCart/EmptyCartNavbar";
import PriceCalculation from "../PriceCalculation/PriceCalculation";

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
                    {   cart.length>0 && <PriceCalculation />   }               
                </div>
            </div>
        </div>
    )
}
export default Cart;