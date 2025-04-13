import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Home page</h2>
      <Login></Login>
    </>
  );
}

export default App
