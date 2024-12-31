import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/products.module";

export const addItemToCart = createAction('[Cart] Add Item',props<{item:any}>())
export const removeItemFromCart = createAction('[Cart] remove item')
export const clearCart = createAction('[Cart] clear cart')