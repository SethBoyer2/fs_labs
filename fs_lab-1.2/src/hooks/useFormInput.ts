import { useState } from "react";

function useFormInput() {
    const [formValue, setFormValue] = useState("")

    const [error, setError] = useState("")

    function updateValue(formValue:string) {
        setFormValue(formValue)
    }    

    function validate()

    return updateValue
}