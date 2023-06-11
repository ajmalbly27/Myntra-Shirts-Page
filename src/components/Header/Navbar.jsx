import logo from '../../images/Myntra-Logo.png';
import './Navbar.css';
import bag from "../../images/bag.png";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ()  => {
    const { cart } = useContext(AppContext);
    const navigate = useNavigate();

    return(
     <div className="container">
        <div className="left-container">
            <div>
                <img className='image-logo' src={logo} alt='Myntra-logo'/>
            </div>
            <div className='header-links'>
                <div className='nav-text'><p>MEN</p></div>
                <div className='nav-text'><p>WOMEN</p></div>
                <div className='nav-text'><p>KIDS</p></div>
                <div className='nav-text'><p>HOME&LIVING</p></div>
                <div className='nav-text'><p>BEAUTY</p></div>
            </div>
        </div>
        <div className="right-container">
            <div>
                <input type='text' className='search' placeholder='Search for products, brands and more'/>
            </div>
            <div className="profile-wishlist-bag">
                <div className='bag-wrapper'>
                    <img src={bag} alt='bag-img' onClick={() => navigate('/Cart')}/>
                    {cart.length ? <span className="bag-span">{cart.length}</span> : null}
                </div>
                <button className='login-logout-button'>LOGIN</button>
            </div>
        </div>
     </div>   
    )
}
export default Navbar;