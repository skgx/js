import React from 'react'
import Expenses from './components/Expenses' 

function App() {
  let expenses=[
    {
      id:'e1',
      title: 'school Fee', 
      amount:250,
      date: new Date(2022,5,12)
    },
    {
      id:'e2',
      title: 'Books', 
      amount:200,
      date: new Date(2022,2,12)
    },
    {
      id:'e3',
      title: 'House rent', 
      amount:500,
      date: new Date(2022,1,12)
    },
    {
      id:'e4',
      title: 'Food', 
      amount:290,
      date: new Date(2022,4,12)
    },
  ];
  // let expenseDate=new Date(2022,3,28);
  // let expenseTitle="school fee";
  // let expenseAmount=300;
  
  return (
    <div>
      <h2>Lets's GO</h2>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
