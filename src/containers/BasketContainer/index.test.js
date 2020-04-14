import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import configureMockStore from 'redux-mock-store';
import  BasketContainer from '.';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();

describe("BasketContainer", () => {
  
  let container = null;
  let store;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  describe("when there are no added prodcuts", () => {

    beforeEach(() => {
      store = mockStore({
        basket: {
          productDetails: [{ 
            id: 'md001',
            name: 'Mountain Dew',
            price: 1.80
          }],
          addedProducts: []
        }
      });
    });
    
    it("should show a message to indicate the basket is empty", () => {

      render(<Provider store={ store }><BasketContainer /></Provider>, container);
      
      expect(container.querySelectorAll('[data-testid="basket-empty-msg"]').length).toBe(1);
    });
  });

  describe("when there are added products", () => {

    beforeEach(() => {
      store = mockStore({
        basket: {
          productDetails: [{ 
            id: 'md001',
            name: 'Mountain Dew',
            price: 1.80
          }, { 
            id: 'des001',
            name: 'Desperados',
            price: 2.58
          }],
          addedProducts: [{
            productId: 'md001',
            qty: 2,
          }]
        }
      });
    });
    
    it("should show the product list", () => {

      render(<Provider store={store}><BasketContainer /></Provider>, container);
      
      expect(container.querySelectorAll('[data-testid="basket-product-list"]').length).toBe(1);
    });
  });
});