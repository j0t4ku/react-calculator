import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");
  const [formula, setFormula] = useState("");
  const [clear, setClear] = useState(false);


  function updateDisplay(e) {
      var text= e.target.value;
      if(parseInt(text,10)==text || text === "." || text === "/" || text === "*" || text === "-" || text === "+" ){
        if(clear===false){
          setDisplay(display+text);
          setFormula(formula+text);

        }else{
          setFormula(text);
          setDisplay(text);
          setClear(false);
        }
      }
      if(text==="="){
        setDisplay(eval(display));
        setFormula(formula+"="+eval(display))
        setClear(true);
      }
  }

  function clearAll(e) {
    setDisplay("");
    setFormula("");
  }
  return (
    <div className="w-3/4 h-screen m-auto bg-slate-100 grid place-content-center">
      <div className='w-[500px] h-[300px] bg-black border-2 border-cyan-400' id="calculator">
      <h1 className='text-white font-bold text-2xl text-center underline'>Javascript Calculator</h1>
        <div id='formulaScree' className='bg-gray-100 px-2 py-2 mt-2 mx-2 text-right h-10'>
          {formula}
        </div>
        <div id='display' className='bg-gray-100 px-2 py-2 mt-2 mx-2 text-right h-10'>
          {display}
        </div>
        <div id='buttons' className='grid grid-cols-4 gap-2 px-2 py-2 bg-black'>
          <button className='buttons col-span-2 h-10' id="clear" value="AC" onClick={clearAll}>AC</button>
          <button onClick={updateDisplay} className='buttons h-10' id="divide" value="/" >/</button>
          <button onClick={updateDisplay} className='buttons h-10' id="multiply" value="*" >x</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="seven" value="7">7</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="eight" value="8">8</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="nine" value="9">9</button>
          <button onClick={updateDisplay} className='buttons h-10' id="subtract" value="-" >-</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="four" value="4">4</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="five" value="5">5</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="six" value="6">6</button>
          <button onClick={updateDisplay} className='buttons h-10' id="add" value="+" >+</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="one" value="1">1</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="two" value="2">2</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="three" value="3">3</button>
          <button onClick={updateDisplay} className='buttons row-span-2' id="equals" value="=" >=</button>
          <button onClick={updateDisplay} className='buttons number h-10 col-span-2' id="zero" value="0">0</button>
          <button onClick={updateDisplay} className='buttons number h-10' id="decimal" value=".">.</button>
        </div>
        <div className='mt-3 text-center'>
          <h3 className='font-semibold'>Designed and Code by</h3>
          <a href="https://j0t4ku.github.io" className='font-serif underline hover:text-red-500'>Joel Florentin</a>

        </div>
      </div>
    </div>
  )
}

export default App
