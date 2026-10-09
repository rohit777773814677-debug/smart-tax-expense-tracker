import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history-section">
      <div className="section-header">
        <h3>Transaction History</h3>
        <span className="tx-count">{transactions.length} {transactions.length === 1 ? 'record' : 'records'}</span>
      </div>
      {transactions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <span role="img" aria-label="chart">📊</span>
          </div>
          <h4>No transactions recorded</h4>
          <p>Add your income or expense entries using the form.</p>
        </div>
      ) : (
        <ul className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};
