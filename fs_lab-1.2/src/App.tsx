import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Organization from './components/Pages/Organization'
import Employees from './components/Pages/Employees'

function App() {
  return (
    <Routes> 
{/* Need to keep routes within the layout path so that the page knows to follow the layout at the root URL */}
      <Route path="/" element={<Layout />}>
        <Route path='Organization' element={<Organization />} />
        <Route path='Employees' element={<Employees />} />
      </Route>
    </Routes>
  )
}
// These comments are basically just for myself so I remember all of this when I start working on the sprint

// Click -> LinkTo="XYZ"
// React Router changes the url to XYZ
// Routes tag checks through the routes to find the match
// and then it basically just triggers whatever element matches the url and displays it via the outlet
// initial setup is definitely the hardest part. After it starts coming together its a lot easier than the last lab
export default App
