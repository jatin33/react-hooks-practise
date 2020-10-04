import React from 'react';
import './App.css';
import ExpenseTracker from './ExpenseTracker';
import { ExportContextProvider } from './ExpenseTracker/contexts/ExpenseContext';

function App() {
  return (
    <div>
        {/* <CountDownTimer time={10} /> */}
        <ExportContextProvider>
          <ExpenseTracker />
        </ExportContextProvider>
    </div>
  );
}

export default App;
