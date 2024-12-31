import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/products.module";
import { addItemToCart } from "./cart.actions";

export interface CartState{
    items:Product[]
}

export const initialCartState:CartState={
    items:[]
}

export const cartReducer = createReducer(initialCartState,
    on(addItemToCart, (state,{ item }) => ({...state,items:[...state.items,item]}))
)
