import UserForm from '../UserForm/UserForm'
import './userFormContainer.css'

export default function UserFormContainer({allowCheckOut}) {
    return (
        <div className="userFormContainer">
            <UserForm allowCheckOut={allowCheckOut}/>
        </div>
    )
}
