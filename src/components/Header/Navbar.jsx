import logo from '../../images/Myntra-Logo.png';
import './Navbar.css';
import bag from "../../images/bag.png";

const Navbar = ()  => {
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
                {/* <div className='profile'><p>Profile</p></div>
                <div className='wishlist'><p>Wishlist</p></div>
                <div className='bag'><p>Bag</p></div> */}
                <img src={bag} alt='bag-img'/>
                <button className='login-logout-button'>Login</button>
            </div>
        </div>
     </div>   
    )
}
export default Navbar;