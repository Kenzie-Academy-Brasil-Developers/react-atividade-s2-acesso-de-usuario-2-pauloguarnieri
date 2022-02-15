import { useState } from "react";

export function Register() {

    const [newMember, setNewMember] = useState({})

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(newMember)
    }

    const handleChange = evt => {
        setNewMember({ ...newMember, })
    }

    return (
        <form action="">
            <input type="text" />
            <input type="text" />
        </form>
    )
}