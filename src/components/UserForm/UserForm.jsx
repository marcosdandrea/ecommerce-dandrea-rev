import {useState} from 'react'
import { TextField, Paper, Typography } from '@mui/material'
import './userForm.css'

export default function UserForm({allowCheckOut}) {

    const [fullName, setFullName] = useState("")
    const [telephone, setTelephone] = useState("")
    const [email, setEmail] = useState("")

    const fullNameStatic = (event) => {
        allowCheckOut(event)
        setFullName(event.target.value)
    }

    const setTelephoneStatic = (event) => {
        allowCheckOut(event)
        setTelephone(event.target.value)
    }

    const setEmailStatic = (event) => {
        allowCheckOut(event)
        setEmail(event.target.value)
    }

    return (
        <Paper className="userFormArranger">
                <Typography variant="h5" component="h1" className="userFormHeader">Fill up this form</Typography>
                <TextField
                    required
                    id="name"
                    label="Full Name"
                    variant="filled"
                    value={fullName}
                    className="formControl"
                    onChange={fullNameStatic}
                />
                <TextField
                    required
                    id="telephone"
                    label="Telephone"
                    variant="filled"
                    value={telephone}
                    className="formControl"
                    onChange={setTelephoneStatic}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    variant="filled"
                    value={email}
                    className="formControl"
                    onChange={setEmailStatic}
                />
        </Paper>
    )
}
