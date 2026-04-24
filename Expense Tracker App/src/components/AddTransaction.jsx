import React,{useState} from 'react'

function AddTransaction({addTransaction}) {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handelSubmit = (e)=>{
        e.preventDefault();

        if (!text.trim() || !amount) return

        const newTransation = {
            id:Date.now(),
            text: text.trim(),
            amount:+amount
        }

        addTransaction(newTransation);
        setText("");
        setAmount("");
    }



  return (
    <form onSubmit={handelSubmit}>
        <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='Enter text'
        />

        <input
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter amount'
            type='number'

        />

        <button>add</button>

    </form>
  )
}

export default AddTransaction
