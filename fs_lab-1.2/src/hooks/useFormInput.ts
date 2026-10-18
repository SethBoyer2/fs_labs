import { useState } from "react";

function useFormInput() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [department, setDepartment] = useState("")

    const [nameError, setnameError] = useState("")
    const [deptError, setDeptError] = useState("")


}