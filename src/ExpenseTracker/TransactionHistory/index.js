// list of cards where each card had delete button
import React, { useContext } from 'react';
import TransactionCard from './TransactionCard';
import style from './index.module.css';
import { ExpenseContext } from '../contexts/ExpenseContext';

function TransactionHistory({ cards }) {
    const { deleteTransaction } = useContext(ExpenseContext);

    return (
        <div className={style.list}>
            <h3>History</h3>
            {cards.map((card) => 
                <TransactionCard
                    key={card.id}
                    id={card.id}
                    desc={card.desc}
                    amount={card.amount}
                    deleteCard={deleteTransaction} // should get callback listening to context global store and updates it
                />
            )}
        </div>
    )
}

export default TransactionHistory;