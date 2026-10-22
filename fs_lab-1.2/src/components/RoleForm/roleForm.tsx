import { useFormInput } from "../../hooks/useFormInput";

function RoleForm() {
    return(
        <form action="">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"/>
            
            <label htmlFor="lastName"></label>
            <input type="text" id="lastName" name="lastName"/>

            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role"/>

            <button type="submit">Add Leader</button>
        </form>
    )
}

export default RoleForm