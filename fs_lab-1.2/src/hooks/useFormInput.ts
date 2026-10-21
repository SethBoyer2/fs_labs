import { useState } from "react";

export function useFormInput() {
    const [formValue, setFormValue] = useState("")
    const [error, setError] = useState("")

    function updateValue(value:string) {
        setFormValue(value)
        setError("")
    }    

    function validate( validator: (value: string) => boolean) {
        const isValid = validator(formValue)

        if (!isValid) {
            setError("Invalid input")
        } else {
            setError("")
        }
        return isValid
    }

    return {formValue, error, updateValue, validate}
}