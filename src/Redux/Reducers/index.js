// import {combinedReducers} from 'react-redux';
import { productReducer } from './productReducer';
import {combineReducers} from 'redux';
import {selectedProductsReducer} from './productReducer'

const reducers = combineReducers ({
    allProducts: productReducer,
    product:selectedProductsReducer,
})

export default reducers;
