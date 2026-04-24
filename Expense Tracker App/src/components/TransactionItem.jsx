import React from 'react'

function TransactionItem({transaction}) {
  return (
    <li>
      {transaction.text} - ₹{transaction.amount}
    </li>
  )
}

export default TransactionItem
