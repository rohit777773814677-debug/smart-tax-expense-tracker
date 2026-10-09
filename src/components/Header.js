import React from 'react';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-badge">
        <span className="badge-pulse"></span>
        FINANCIAL DASHBOARD
      </div>
      <h2 className="header-title">Smart Tax & Expense Tracker</h2>
      <p className="header-subtitle">Monitor cash flow, track deductions, and balance finances in real-time.</p>
    </header>
  );
};

