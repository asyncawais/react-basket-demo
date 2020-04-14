import React from 'react';
import { BASKET_EMPTY_LABEL } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_BASKET, REMOVE_FROM_BASKET, UPDATE_PRODUCT_QTY } from '../../actions/basketActionTypes';
import { getBasketContents } from '../../reducers/basketReducer';
import ShowAmount from '../../components/ShowAmount';
import { Basket, BasketFooter, BasketProductName, BasketProductQty, BasketProductPrice, BasketLabel, BasketProductList, BasketProductItem, BasketClearButton, BasketRemoveButton, BasketTotalPrice } from './style';

function BasketContainer() {

  const basketContents = useSelector(getBasketContents);
  const dispatch = useDispatch();

  const clearBasket = () => {
    dispatch({type: CLEAR_BASKET});
  }

  const updateQuantity = (e, productId) => {
    const value = e.target.value ? e.target.value : 1;
    dispatch({type: UPDATE_PRODUCT_QTY, payload: { productId, qty: value }});
  }

  const removeProduct = (productId) => {
    dispatch({type: REMOVE_FROM_BASKET, payload: { productId }});
  }
  
  return (
    <Basket>
      { basketContents.addedProducts.length ? (
        <div>
          <BasketProductList data-testid="basket-product-list">
            {basketContents.addedProducts.map(product => 
              <BasketProductItem key={ product.id }>
                <BasketProductName>
                  { product.name }
                </BasketProductName>
                <BasketProductQty 
                  type="number"
                  min="1"
                  step="1"
                  value={ product.qty } 
                  onKeyPress={ (e) => e.charCode === 46 && e.preventDefault() }
                  onChange={ (e) => { updateQuantity(e, product.id) } } 
                />
                <BasketProductPrice>
                  <ShowAmount amount={ product.totalPrice } />
                </BasketProductPrice>
                <BasketRemoveButton onClick={ (e) => { removeProduct(product.id) } }>&#x2715;</BasketRemoveButton>
              </BasketProductItem>
            )}
          </BasketProductList>
          <BasketFooter>
            <BasketTotalPrice data-testid="basket-totalcost">
              <ShowAmount amount={ basketContents.totalCost } />
            </BasketTotalPrice>
          </BasketFooter>
          <BasketClearButton onClick={ clearBasket }>Clear</BasketClearButton>
        </div>
      ) : ( 
        <BasketLabel data-testid="basket-empty-msg">{ BASKET_EMPTY_LABEL }</BasketLabel> 
      )}
    </Basket>
  );
}

export default BasketContainer;