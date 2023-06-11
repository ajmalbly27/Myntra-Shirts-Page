import { useContext } from "react";
import "./PriceCalculation.css";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const PriceCalculation = () => {

    const navigate = useNavigate();

    const { cart } = useContext(AppContext);

    let mrpPrice = 0;
    let finalPrice = 0;
    let discountPrice = 0;
    let convenienceFee = 10;
    let totalAmount = 0;

    cart.map((item) => {
        mrpPrice = Number(mrpPrice) + item.quantity * (Number(item.strickPrice));
        finalPrice = Number(finalPrice) + item.quantity * (Number(item.finalPrice));
        discountPrice = Number(mrpPrice - finalPrice);
        totalAmount = mrpPrice - discountPrice + convenienceFee;
        return 0;
    });

    return(
        <div className="price-wrapper">
            <div className="price-details-text">PRICE DETAILS</div>
            <div className="price-details">
                <div>Total MRP</div>
                <div> &#8377;{mrpPrice}</div>
            </div>
            <div className="price-details">
                <div>Discount on MRP</div>
                <div className="discount-on-mrp">-&#8377;{discountPrice}</div>
            </div>
            <div className="price-details">
                <div>Coupon Discount</div>
                <div className="apply-coupon">Apply Coupon</div>
            </div>
            <div className="price-details">
                <div>Convenience Fee</div>
                <div> &#8377;{convenienceFee}</div>
            </div>
            <div className="price-details total-amount-text">
                <div>Total Amount</div>
                <div> &#8377;{totalAmount}</div>
            </div>
            <button className="place-order-button" onClick={() => navigate('/Login')}>PLACE ORDER</button>
        </div>
    )
}
export default PriceCalculation;