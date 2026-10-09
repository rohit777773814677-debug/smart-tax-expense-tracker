import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Money formatter function
function moneyFormatter(num) {
  let p = Math.abs(num).toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, digit, i) {
        return digit === '-' ? acc : digit + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const isExpense = transaction.amount < 0;
  const sign = isExpense ? '-' : '+';

  return (
    <li className={`tx-item ${isExpense ? 'minus' : 'plus'}`}>
      <div className="tx-details">
        <span className="tx-title">{transaction.text}</span>
        {transaction.category && (
          <span className="tx-category-badge">
            {transaction.category}
          </span>
        )}
      </div>
      <div className="tx-right-group">
        <span className={`tx-amount ${isExpense ? 'minus' : 'plus'}`}>
          {sign}{moneyFormatter(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
          title="Delete record"
          aria-label="Delete transaction"
        >
          ✕
        </button>
      </div>
    </li>
  );
};