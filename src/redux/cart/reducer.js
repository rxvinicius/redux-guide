import * as CartActionsTypes from './action-type';

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CartActionsTypes.ADD_PRODUCT:
      const isProductAlreadyAdded = state.products.some(product => product.id === payload.id);

      if (isProductAlreadyAdded) {
        return {
          ...state,
          products: state.products.map(product => product.id === payload.id ? { ...product, quantity: product.quantity + 1 } : product),
        };
      }

      return { ...state, products: [...state.products, { ...payload, quantity: 1 }] };

    case CartActionsTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== payload),
      };

    case CartActionsTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => product.id === payload ? { ...product, quantity: product.quantity + 1 } : product),
      };

    case CartActionsTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products
          .map(product => product.id === payload ? { ...product, quantity: product.quantity - 1 } : product)
          .filter(product => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;
