import React, { createContext, useState } from "react";
import data from "../constants/data";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [allProducts, setAllProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(data);
    const [cart, setCart] = useState([]);

    let addToCart = (selectedProduct) => {
        if(cart.includes(selectedProduct)) {
            return;
        }
        setCart([...cart, selectedProduct]);
        // console.log(cart);
    }

    return(
        <AppContext.Provider value={{
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            cart,
            addToCart          
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

