import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],    //initial empty product list which we are updating with initialProduct List
    // and if nothing is applied i will get list with 15 product
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

//updated return
const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products) {   //with the help of dispatch we can upadate the propertys of product
        dispatch({                     //it will give bestseller is given by filterreducer type
            type: "PRODUCT_LIST",      //payload will be true or false
            payload: {
                products: products
            }
        });
    }
    //its access to list product and return product list initially it will return as it is
    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }
    function inStock(products) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }


    function sort(products) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARSABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARSABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if (state.ratings === "1STARSABOVE") {
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }
    //filterlist if i change any state i can revalutes lisy
    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));


    //filteredProduct List contain all the updated state
    const value = {
        state,        //passing state and dispatch
        dispatch,
        products: filteredProductList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}