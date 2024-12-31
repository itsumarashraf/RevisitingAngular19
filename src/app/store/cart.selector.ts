import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectCartState = (state: AppState) => state.cart

export const selectCart = createSelector(
    selectCartState,
    (state)=>state.items
)