import { CLEAR_BASKET, REMOVE_FROM_BASKET, UPDATE_PRODUCT_QTY } from '../actions/basketActionTypes';

const initialState = {
    productDetails: [
      { 
          id: 'md001',
          name: 'Mountain Dew',
          price: 1.80
      },
      { 
          id: 'des001',
          name: 'Desperados',
          price: 2.58
      },
      { 
          id: 'jd001',
          name: 'Jack Daniels Dew',
          price: 3.35
      }
    ],
    addedProducts: [
      {
          productId: 'md001',
          qty: 2,
      },
      {
          productId: 'des001',
          qty: 6,
      },
      {
          productId: 'jd001',
          qty: 4,
      },
    ]
};
  
function basketReducer(state = initialState, action) {

  switch (action.type) {

    case CLEAR_BASKET:

      return {
        ...state,
        addedProducts: []
      };

    case REMOVE_FROM_BASKET:

      const withRemovedProduct = state.addedProducts.filter(item => item.productId !== action.payload.productId);

      return {
        ...state,
        addedProducts: withRemovedProduct
      };

    case UPDATE_PRODUCT_QTY:
      
      const withUpdatedQty = state.addedProducts.map(item => {
        if (item.productId === action.payload.productId) {
          return {
            productId: action.payload.productId,
            qty: action.payload.qty
          }
        } else {
          return item;
        }
      });
      
      return {
        ...state,
        addedProducts: withUpdatedQty
      };
    default:
      return state
  }
}

export default basketReducer;

export const getBasketContents = (state) => {
  
  let totalCost = 0;

  const addedProducts = state.basket.productDetails.filter(product => {

    return state.basket.addedProducts.find(addedProduct => {

      if (product.id === addedProduct.productId) {

        product.qty = addedProduct.qty;
        product.totalPrice = addedProduct.qty * product.price;
        totalCost += product.totalPrice;

        return true;
      } else {
        
        return false;
      }
    });
  });

  return { addedProducts, totalCost };
};