import React, { useRef, useState } from 'react'

const App = () => {
  const ref = useRef(null)
  const [text, setText] = useState('moges')

  const handleButton =()=>{
    if(ref.current.value){
      setText(ref.current.value)
    } else {
      alert('Please enter a value')
    }

  }



  return (
    <div>

      <input type="text" ref={ref}  />

      <button onClick={handleButton()}>Get Text</button>
      <p>{text}</p>

      
    </div>
  )
}

export default App
