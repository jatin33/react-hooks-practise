import React from 'react';
import style from './index.module.css';

function OverallStatus({ income, expense }) {
    return (<div className={style.container}>
        <div className={style.income}>Total Income: {income}</div>
        <div className={style.expense}>Total Expense: {expense}</div>
        <div>Balance Left: {income + expense}</div>
    </div>)
}

export default OverallStatus;