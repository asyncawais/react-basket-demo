import { CURRENCY_SYMBOL } from '../../constants';

function ShowAmount(props) {
  return  `${CURRENCY_SYMBOL}${(props.amount).toFixed(2)}`
}

export default ShowAmount;