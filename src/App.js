import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list,setList] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();

    try {
      let colors= new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error)
    }
   
  }

  return (
    <> 
    <section className='container'>
      <h3>Color Generator</h3>

      <form onSubmit={handleSubmit}>
        <input className={`${error? 'error': null}`} value={color} onChange={(e)=>{setColor(e.target.value)}} placeholder='enter a color code' type='text'></input>

        <button className='btn' type='submit'> Submit </button>

      </form>

    </section>
    <section className='colors'>
      {list.map(((color,index)=>{
        console.log(color);
        return (<SingleColor key={index} {...color} index={index}>

        </SingleColor>)
      }))}

    </section>
    
    
    </>
  )
}

export default App
