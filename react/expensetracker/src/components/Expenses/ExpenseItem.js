import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import React,{useState} from 'react'
const ExpenseItem=(props)=>{

    const [title,setTitle]= useState(props.title);
    const clickHandler=()=>{
        setTitle('New Title')
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <input type="text"/>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;