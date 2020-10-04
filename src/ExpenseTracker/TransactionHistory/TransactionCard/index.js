import React from 'react';
import style from './index.module.css';

function TransactionCard({ id, desc, amount , deleteCard }) {
    return (<div className={amount > 0 ? style.income: style.expense}>
        <span>{desc}</span>
        <span>{amount}</span>
        <button onClick={() => { deleteCard(id) }}>Delete</button>
    </div>)
}

export default TransactionCard;