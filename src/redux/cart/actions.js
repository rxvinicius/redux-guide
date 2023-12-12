import * as CartActionsTypes from './action-type';

export const addProductToCart = (payload) => ({ type: CartActionsTypes.ADD_PRODUCT, payload });

export const removeProductFromCart = (payload) => ({ type: CartActionsTypes.REMOVE_PRODUCT, payload });

export const increaseProductQuantity = (payload) => ({ type: CartActionsTypes.INCREASE_PRODUCT, payload });

export const decreaseProductQuantity = (payload) => ({ type: CartActionsTypes.DECREASE_PRODUCT, payload });
