
import ExpenseItem from './components/ExpenseItem' 

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
    <ExpenseItem 
      date={expenses[0].date} 
      title={expenses[0].title}
      amount={expenses[0].amount} 
    />
    <ExpenseItem 
     date={expenses[1].date} 
     title={expenses[1].title}
     amount={expenses[1].amount} 
    />
    <ExpenseItem 
      date={expenses[2].date} 
      title={expenses[2].title}
      amount={expenses[2].amount} 
    />
    <ExpenseItem 
      date={expenses[3].date} 
      title={expenses[3].title}
      amount={expenses[3].amount} 
    />
    </div>
  );
}

export default App;
