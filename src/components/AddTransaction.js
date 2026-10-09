import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' | 'expense'
  const [category, setCategory] = useState('Office & Supplies');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.trim() || !amount) return;

    const numAmount = Math.abs(parseFloat(amount));
    if (isNaN(numAmount) || numAmount <= 0) return;

    const finalAmount = type === 'expense' ? -numAmount : numAmount;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text.trim(),
      amount: finalAmount,
      category
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className="add-tx-card">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="type-toggle-container">
          <button
            type="button"
            className={`type-toggle-btn ${type === 'expense' ? 'active-expense' : ''}`}
            onClick={() => setType('expense')}
          >
            <span className="dot red"></span> Expense (-)
          </button>
          <button
            type="button"
            className={`type-toggle-btn ${type === 'income' ? 'active-income' : ''}`}
            onClick={() => setType('income')}
          >
            <span className="dot green"></span> Income (+)
          </button>
        </div>

        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Office Supplies, Salary..."
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="custom-select"
          >
            <option value="Office & Supplies">Office & Supplies</option>
            <option value="Travel & Commute">Travel & Commute</option>
            <option value="Software & Tools">Software & Tools</option>
            <option value="Client Meeting">Client Meeting</option>
            <option value="Tax & Compliance">Tax & Compliance</option>
            <option value="Salary & Revenue">Salary & Revenue</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount (₹)</label>
          <input
            id="amount"
            type="number"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>

        <button className={`btn submit-btn ${type === 'income' ? 'btn-income' : 'btn-expense'}`}>
          Add {type === 'income' ? 'Income' : 'Expense'} Transaction
        </button>
      </form>
    </div>
  );
};