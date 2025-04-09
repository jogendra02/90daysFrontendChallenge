import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="row">
        <div class="col-6">
          <p>Instagram photos</p>
        </div>
        </div>
        <div class="row">
        <div class="col-6">

        
      <h3>Instagram</h3>
      
        <label for ="emailtext">Email</label>
        <input type = "text" placeholder='Username'></input><br></br><br></br>
        <label for ="passwordtext">Password

        </label>
        <input type = "text" placeholder='password'></input><br></br><br></br><br></br>
                <button type='text'>Login</button>
        

        </div>
        </div> 
        </div>   
              </>
  )
}

export default App
