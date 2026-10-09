import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="bg-glow-container" aria-hidden="true">
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
        <div className="glow-sphere sphere-3"></div>
      </div>

      <div className="app-layout">
        <Header />
        
        <main className="main-content">
          <div className="dashboard-grid">
            <div className="dash-column left-column">
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
            </div>
            <div className="dash-column right-column">
              <TransactionList />
            </div>
          </div>
        </main>

        <footer className="app-footer">
          <p>Smart Tax & Business Expense Tracker • Powered by React & Modern CSS</p>
        </footer>
      </div>
    </GlobalProvider>
  );
}

export default App;
