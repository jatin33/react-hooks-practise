import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import { uuid } from '../utils/helpers';
import style from './index.module.css';

function CreateTransaction({ type }) {
    const initialState = {desc: '', amount: 0};
    const [ formData, setFormData ] = useState(initialState);
    const { addTransaction } = useContext(ExpenseContext);

    function handleChange(e) {
        const { target } = e;

        const { name, value } = target;

        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { desc, amount } = formData;

        const transaction = {
            id: uuid(),
            desc, 
            amount: type === "expense" ? 
                        (parseInt(amount) * -1) : parseInt(amount)
        };
        console.log(typeof amount);

        addTransaction(transaction);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className={style.container}>
            <div className={style.field}>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    name="desc" 
                    value={formData.desc} 
                    onChange={handleChange} 
                />
            </div>
            <div className={style.field}>
                <label htmlFor="amt">Amount</label>
                <input 
                    id="amt"
                    type="number"
                    name="amount" 
                    value={formData.amount} 
                    onChange={handleChange} 
                />
            </div>
           
            <input 
                type="submit" 
                value="Create Transaction"
                disabled={formData.desc === ''} />
        </form>
    )
}

export default CreateTransaction;