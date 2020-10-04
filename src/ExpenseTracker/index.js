import React, { useState, useContext } from 'react';
import OverallStatus from './OverallStatus';
import style from './index.module.css';
import TransactionHistory from './TransactionHistory';
import CreateTransaction from './CreateTransaction';
import { ExpenseContext } from './contexts/ExpenseContext';

function ExpenseTracker() {
    const [type, setType] = useState("income");
    const { transactions } = useContext(ExpenseContext);
    const amounts = transactions.map(transaction => transaction.amount);

    function handleControls(e) {
        const { value } = e.target;

        setType(value);
    }

    function getIncome() {
        return amounts
                .filter(amount => amount > 0)
                .reduce((acc, curr) => acc + curr, 0);
    }

    function getExpense() {
        return amounts
                .filter(amount => amount < 0)
                .reduce((acc, curr) => acc + curr, 0);
    }

    return (<div className={style.centerFlex}>
        <div className={style.container}>
        <OverallStatus 
            income={getIncome()}
            expense={getExpense()} 
        />
        <TransactionHistory cards={transactions}/>
        </div>
        <div className={style.centerFlex}>
        <div 
          className={style.controls}>
            <span>
                <label htmlFor="expense">Expense</label>
                <input 
                    id="expense" 
                    type="radio" 
                    name="action"
                    value="expense"
                    checked={type === "expense"}
                    onChange={handleControls} />
            </span> |
            <span>
                 <label htmlFor="income">Income</label>
                 <input 
                    id="income" 
                    type="radio" 
                    name="action"
                    value="income"
                    checked={type === "income"}
                    onChange={handleControls} />
            </span>
        </div>
        <CreateTransaction type={type} />
        </div>
    </div>)
}

export default ExpenseTracker;