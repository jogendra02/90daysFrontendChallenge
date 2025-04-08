import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Instagram</h3>
      <div>
        <label for ="emailtext">Email</label>
        <input type = "text"></input><br></br><br></br>
        <label for ="passwordtext">Password

        </label>
        <input type = "text"></input><br></br><br></br><br></br>
                <button type='text'>Login</button>
        

        
        </div>    
              </>
  )
}

export default App
