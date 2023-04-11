
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../models/models'




// Define a type for the slice state
interface ProductsState {
  loading:boolean,
  error:boolean,
  favorites:Product[] ,
  productsList:Product[]
}

// Define the initial state using that type
const initialState: ProductsState = {
  loading:false ,
  error:false,
  favorites:[],
  productsList:[]
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
fetchStart(state) {
    state.loading = true;
    state.error = false
},
getSuccessProduct (state,action:PayloadAction<Product[]>) {
    state.loading = false ;
    state.error = false;
    state.productsList= action.payload
},
addFavorites (state , action:PayloadAction<Product>) {
    state.favorites = [...state.favorites , action.payload] 
} ,
removeFavorites (state, action:PayloadAction<Product[]>) {
    state.favorites = action.payload
} ,
fetchFail(state) {
    state.loading = false;
    state.error = true
},



    
  },
})

export const { fetchFail , fetchStart, addFavorites,getSuccessProduct , removeFavorites} = productsSlice.actions


export const productsReducer = productsSlice.reducer