// import React ,{createContext} from "react";
// import allproducts from "../Components/Assets/allproducts";

// export const ShopContext = createContext(null);

// const ShopContexProvider = (props) =>{
//     const contextValue= {allproducts};

//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }

// export default ShopContexProvider


import React, { createContext } from "react";
import all_products from "../Components/Assets/allproducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => { // Fixed typo
    const contextValue = { all_products };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
