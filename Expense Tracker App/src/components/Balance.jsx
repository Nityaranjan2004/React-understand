import React from 'react'

function Balance({transactions}) {
    const amount = transactions.map(t=>t.amount);
    const total = amount.reduce((acc,item)=>acc+item,0);

    return <h3>Balance: {total}</h3>
}

export default Balance
