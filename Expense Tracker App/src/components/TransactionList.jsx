import React from 'react'
import TransactionItem from './TransactionItem'

function TransactionList({transactions}) {
  return (
    <ul>
        {transactions.map(t=>(
            <TransactionItem key={t.id} transaction={t}/>
        ))}
    </ul>
  )
}

export default TransactionList
