import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router"
import DepartmentList from './components/DepartmentList/DepartmentList'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import EmployeeForm from './components/EmployeeForm/Form'
import { employeeService } from './services/employeeService'



function App() {
  // init state as an empty array
  const [departments, setDepartments] = useState<Department[]>([])

  // use useEffect to retrieve department data
 useEffect(() => {
  async function loadDepartments() {
    const data = await employeeService.getEmployees()
    setDepartments(data)
  }
  loadDepartments()
 }, [])


  return (
    <>
    <Header />
      <main>
        <DepartmentList departments={departments} />
        <EmployeeForm departments={departments} updateDepartments={setDepartments} />
      </main>

      <Footer />
    </>
  )
}
/*
app STILL owns the state, Employee form collects the data, the service validates & sends data to the repo,
the repo updates and returns the data
*/

export default App
