import { useState } from 'react'
import Header from "./components/Header"
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      transaction,
    ])
  }

  return (
    <>
      <Header />
      <Balance transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </>
  );
}

export default App
