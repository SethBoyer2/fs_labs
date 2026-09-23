import { useState } from 'react'
import DepartmentList from './components/DepartmentList/DepartmentList'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import EmployeeForm, { type EmployeeData } from './components/EmployeeForm/Form'
import Departments from './components/DepartmentList/Data'

function App() {
  // Need to have the department state in app.tsx, because app can pass the state downward.
  // The point of having a department state is so that what departmentList iterates over can be flexible.
  // Ie. Start with Departments from data.tsx, and allow us to change what it renders, and re-render the site.
const [departments, setDepartments] = useState(Departments)

  function addEmployee(employeeValues: EmployeeData) {
    
  }
  return (
    <>
    <Header />
      <main>
        <DepartmentList departments={departments}/>
        <EmployeeForm addEmployee={addEmployee}/>
      </main>

      <Footer />
    </>
  )
}

export default App
