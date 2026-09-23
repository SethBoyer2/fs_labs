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

  return (
    <>
    <Header />
      <main>
        <DepartmentList departments={departments}/>
        <EmployeeForm/>
      </main>

      <Footer />
    </>
  )
}
/*
App owns state because EmployeeForm and DepartmentList are siblings. They cannot see eachother or what they contain (for my purposes, anyways.)
When App owns state, EmployeeForm and DepartmentList can both access the state because it's passed down. Moving the state up allows both to work.

By default, App.tsx runs, which triggers the initial useState, which sets departments to the Department list from Data.tsx, allowing the site to render
the full department list initially. 

What I need to do is:
- Fill out employee info (good)
- validate employee info (also good enough for the lab)
- create an object containing the employee info (good)
- pass employee information to addEmployee function
- re-render the site in the addEmployee function by seting the useState to the employee object(???)
- map the departments again so that I can iterate and match the new employees department
- ???????
*/

export default App
