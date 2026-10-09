import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance-card">
      <div className="balance-header">
        <span className="balance-label">Total Net Balance</span>
        <span className={`balance-status ${total >= 0 ? 'positive' : 'negative'}`}>
          {total >= 0 ? '▲ Healthy' : '▼ Deficit'}
        </span>
      </div>
      <h1 className={`balance-amount ${total >= 0 ? 'positive' : 'negative'}`}>
        {moneyFormatter(total)}
      </h1>
    </div>
  );
};
