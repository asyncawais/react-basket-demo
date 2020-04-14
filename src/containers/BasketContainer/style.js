import styled from 'styled-components';

export const Basket = styled.div`
  background-color: white;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  font-size: 0.8em;
  padding: 2em;
  max-width: 320px;
  margin: 0 auto;
`;

export const BasketRow = styled.div`
  width: 100%;
`

export const BasketProductName = styled.span`
  color: grey;
  display: inline-block;
  font-weight: bold;
  width: 50%;
`

export const BasketProductQty = styled.input`
  display: inline-block;
  width: 10%;
  text-align: center;
  margin: 0;
`
export const BasketProductPrice = styled.span`
  color: orange;
  display: inline-block;
  font-weight: bold;
  width: 30%;
  text-align: right;
`

export const BasketLabel = styled.span`
  color: grey;
  font-size: 1.5em;
  font-weight: bold;
`;

export const BasketProductList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const BasketProductItem = styled.li`
  border-bottom: 1px dashed lightgrey;
  list-style-type: none;
  margin: 0 0 1.5em;
  padding: 0 0 1em;
  text-indent: 0;
`;

export const BasketRemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  color: grey;
  cursor: pointer;
  float: right;
  font-weight: bold;
  height: 15px;
  text-align: right;
  margin: 2px 0 0;
  padding: 0;
`;

export const BasketTotalPrice = styled.span`
  color: grey;
  font-size: 1.5em;
  font-weight: bold;
  float: left;
  width: 50%;  
`

export const BasketClearButton = styled.button`
  background-color: transparent;
  color: grey;
  cursor: pointer;
  display: inline-block;
  border: 0;
  font-size: 1em;
  font-weight: bold;
  height: 2em;
  line-height: 1em;
  padding: 0;
`

export const BasketFooter = styled.div`
  margin-top: 2em;
`

