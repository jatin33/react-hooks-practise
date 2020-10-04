import React, { useState } from 'react';

const initialState = {
    transactions: []
};

export const ExpenseContext = React.createContext(initialState);


export const ExportContextProvider = ({ children }) => {
    const [ transactions, setTransaction ] = useState([]);

    function addTransaction(data) {
        setTransaction([data, ...transactions]);
    }

    function deleteTransaction(id) {
        setTransaction(transactions.filter(transaction => transaction.id !== id));
    }

    return (<ExpenseContext.Provider value={{
        transactions: transactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </ExpenseContext.Provider>)
};
