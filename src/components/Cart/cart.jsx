import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Cart.css";
import CartItem from "../CartItem/cartItem";
import EmptyCart from "../EmptyCart/EmptyCart";
import EmptyCartNavbar from "../EmptyCart/EmptyCartNavbar";
import PriceCalculation from "../PriceCalculation/PriceCalculation";
import percentageLogo from "../../images/percentage.png";


const Cart = () => {
    const { cart } = useContext(AppContext);

    return(
        <div className="cart-wrapper">            
            <EmptyCartNavbar />
            <div className="cart-container">
                <div>
                    { cart.length > 0 ?
                        <div className="offers">
                            <div className="offers-container">
                                <div className="available-offers">                                
                                    <img src={percentageLogo} alt="percentage-img"/>                                                         
                                    <div>Available Offers</div>                                
                                </div>
                                <div className="kotak-discount">10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000. TCA</div>
                            </div>
                        </div> : null                    
                    }

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
                </div>                
                <div>
                    {   cart.length>0 && <PriceCalculation />   }               
                </div>
            </div>
        </div>
    )
}
export default Cart;