import React, { createContext, useState } from "react";
import data from "../constants/data";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [allProducts, setAllProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(data);
    const [cart, setCart] = useState([]);

    // let addToCart = (selectedProduct) => {
    //     if(cart.includes(selectedProduct)) {
    //         return;
    //     }
    //     setCart([...cart, selectedProduct]);
    //     // console.log(cart);
    // }

    const addToCart = (selectedProduct) => {
        const selectedProductWithQuantity = { ...selectedProduct, quantity: 1 }; // Set a default quantity of 1
        setCart((prevItems) => {
            const selectedProductKey = generateSelectedProductKey(selectedProduct);

            return [...prevItems, {...selectedProductWithQuantity, key: selectedProductKey }]

        });
    };

    const increaseQuantity = (item) => {
        setCart((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.key === item.key
              ? { ...prevItem, quantity: prevItem.quantity + 1 }
              : prevItem
          )
        );
    };

    const decreaseQuantity = (item) => {
        if(item.quantity === 1) {
            return;
        }
        setCart((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.key === item.key
              ? { ...prevItem, quantity: prevItem.quantity - 1 }
              : prevItem
          )
        );
    };

    const generateSelectedProductKey = (item) => {
        // Concatenate relevant properties to create a unique key
        return `${item.name}-${item.description}-${item.finalPrice}-${item.strickPrice}`;
    };

    return(
        <AppContext.Provider value={{
            allProducts,
            setAllProducts,
            filteredProducts,
            setFilteredProducts,
            cart,
            addToCart,
            increaseQuantity,
            decreaseQuantity
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

