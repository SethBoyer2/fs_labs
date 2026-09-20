
import DepartmentList from './components/DepartmentList/DepartmentList'
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'
import EmployeeForm from './components/EmployeeForm/form'

function App() {

  return (
    <>
    <Header />
      <main>
        <DepartmentList />
        <EmployeeForm />
      </main>

      <Footer />
    </>
  )
}

export default App
