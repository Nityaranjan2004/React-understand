import React, { useState } from 'react'
import Button from "./Button"
import Display from "./Display"

function Calculator() {
    const [input, setInput] = useState("")
    const handleClick = (value) => {
        setInput((currentInput) => currentInput + value)
    };

    const calculate = () => {
        if (!input) return

        try {
            // eval("2+3")        // → 5
            // eval("10/2")       // → 5
            // eval("4*5+2")      // → 22
            setInput(eval(input).toString());
        } catch {
            setInput("Error")
        }
    }
    const clear = ()=> setInput("")
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <div className='bg-gray-800 p-6 rounded-2xl w-80'>
        <Display value={input}/>
            <div className="grid grid-cols-4 gap-3 mt-4">
          {["1","2","3","+"].map(b => <Button key={b} label={b} onClick={handleClick} />)}
          {["4","5","6","-"].map(b => <Button key={b} label={b} onClick={handleClick} />)}
          {["7","8","9","*"].map(b => <Button key={b} label={b} onClick={handleClick} />)}
          {["0","/"].map(b => <Button key={b} label={b} onClick={handleClick} />)}

          <Button label="C" onClick={clear} />
          <Button label="=" onClick={calculate} />
        </div>
      </div>
    </div>
  )
}

export default Calculator
