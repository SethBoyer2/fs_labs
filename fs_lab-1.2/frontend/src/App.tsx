import { useState, useEffect } from 'react'
import DepartmentList from './components/DepartmentList/DepartmentList'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import EmployeeForm from './components/EmployeeForm/Form'
import { employeeService } from './services/employeeService'
import type { Department } from '../../shared/types/department'


function App() {
  // init state as an empty array
  const [departments, setDepartments] = useState<Department[]>([])
  
  // call getDepartments to get departments, set departments to the returned departments array
  async function loadDepartments() {
    const data = await employeeService.getDepartments()
    setDepartments(data)
  }
  // use useEffect to retrieve department data after page renders
 useEffect(() => {
  void loadDepartments()
 }, [])

// pass departmentList departments prop for initial render
// pass onEmployeeCreated prop to EmployeeForm w/ loadDepartments for callback to update department state
  return (
    <>
    <Header />
      <main>
        <DepartmentList departments={departments} />
        
        <EmployeeForm onEmployeeCreated={loadDepartments} />
      </main>

      <Footer />
    </>
  )
}
/*
Final front-end to back-end  flow
grab employee form data using custom hook
create employee object
call front-end add employee service w/ employee object, validate and apply business logic
delegate to front-end repo
send http request
route picks up request 
controller delegates to back-end service (EXPECTING TO RECEIVE A RESPONSE.)
back-end service applies logic (at least, it can. My validation logic for POST reqs is handled thru zod so service just delegates)
back-end repo grabs/modifies data, and returns back thru service to controller, where the response is returned to front-end
when form.tsx calls onEmployeeCreated it calls back to loadDepartments in app.tsx
that function makes ANOTHER get request to grab the updated departments, and then calls setDepartments
react rerendesr the dept. list

also there is validation middleware thru zod for POST requests

also worth noting for myself that there's virtually no difference between the previous front-end repo and the current back-end repo
they do the same things functionally, but back-end repos are async and promise a return type.

The entire flow moves forward, creating the object and applying front-end logic, sending http request with employee object,
and then moves forward through back-end until the array is finally updated, and it returns backwards through the back-end as a response, finishing 
the chain of functions expecting returns

also, i've confirmed that errors do return properly, they just don't display yet

it's actually really easy conceptually but the way I initially handled the returns by only returning employees made it way harder to debug the final link
*/

export default App
