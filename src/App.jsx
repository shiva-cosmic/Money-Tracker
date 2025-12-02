import { NavBar } from './Components'
import './index.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar className="bg-gradient-to-r from-blue-500 to-cyan-500 p-5 shadow-lg" />
      <Outlet/>
    </div>  
  )
}

export default App
