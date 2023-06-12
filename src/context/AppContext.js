import React, { createContext, useState } from "react";
import data from "../constants/data";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [allProducts, setAllProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(data);
    const [cart, setCart] = useState([]);

    const addToCart = (selectedProduct) => {
    
        const selectedProductWithQuantity = { ...selectedProduct, quantity: 1 }; // Set a default quantity of 1
        const selectedProductKey = generateSelectedProductKey(selectedProduct);
        const selectedProductWithKeyAndQuantity = { ...selectedProductWithQuantity, key: selectedProductKey }; // Set a key to the product 
        let isProductPresent = false;
        cart.map((item) => {
            if(item.key === selectedProductWithKeyAndQuantity.key) {
                isProductPresent = true;
            }
            return undefined;
        })

        if(isProductPresent) {
            console.log("Product is present already!");
            return;
        }

        setCart((prevItems) => {
            return [...prevItems, { ...selectedProductWithKeyAndQuantity }]

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

    const allFilter = () => {
        setFilteredProducts(allProducts);
    }
    
    const maleFilter = () => {
        setFilteredProducts([]);
        setFilteredProducts(allProducts.filter((item) => {
            return item.gender === 'M';
        }))
    }

    const femaleFilter = () => {
        setFilteredProducts([]);
        setFilteredProducts(allProducts.filter((item) => {
            return item.gender === 'F';
        }))

    }

    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts,
            cart,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            allFilter,
            maleFilter,
            femaleFilter
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

