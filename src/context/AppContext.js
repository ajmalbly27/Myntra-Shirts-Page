import React, { createContext, useState } from "react";
import data from "../constants/data";

export const AppContext = createContext();

export const AppProvider = (props) => {
    // eslint-disable-next-line
    const [allProducts, setAllProducts] = useState(data);
    const [filteredProducts, setFilteredProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const [roadsterCheckboxChecked, setRoadsterCheckboxChecked] = useState(false);
    const [wrongCheckboxChecked, setWrongCheckboxChecked] = useState(false);
    const [highlanderCheckboxChecked, setHighlanderCheckboxChecked] = useState(false);

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

    const roadster = () => {
        // Fetch or filter the related data based on checkbox state
        if(!roadsterCheckboxChecked) {
            setFilteredProducts(allProducts.filter((item) => {
                return item.name === 'Roadster';
            }))
        }else {
            setFilteredProducts(allProducts);
        }
        setRoadsterCheckboxChecked(!roadsterCheckboxChecked);
    }

    const wrong = () => {
        // Fetch or filter the related data based on checkbox state
        if(!wrongCheckboxChecked) {
            setFilteredProducts(allProducts.filter((item) => {
                return item.name === 'WROGN';
            }))
        }else {
            setFilteredProducts(allProducts);
        }
        setWrongCheckboxChecked(!wrongCheckboxChecked);
    }

    const highlander = () => {
        // Fetch or filter the related data based on checkbox state
        if(!highlanderCheckboxChecked) {
            setFilteredProducts(allProducts.filter((item) => {
                return item.name === 'HIGHLANDER';
            }))
        }else {
            setFilteredProducts(allProducts);
        }
        setHighlanderCheckboxChecked(!highlanderCheckboxChecked);
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
            femaleFilter,
            roadster,
            wrong,
            highlander
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

