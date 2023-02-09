import './reset.css'
import { Link } from "react-router-dom"
export const SuccessForgotPassword =()=>{
    return(
        <>
        <div className="SuccessPasswordContainer">
        <div className="SuccessPassword">
            <h1>En proceso</h1>
            <p>El correo ya se ha enviado, revise su Email para restablecer su contraseña </p>
        </div>
        </div>
        </>
    )
}

export const SuccessResetPassword =()=>{
    return(
        <>
        <div className="SuccessPasswordContainer">
        <div className="SuccessPassword">
            <h1>Felicitaciones</h1>
            <p>Su contraseña ha sido restaurada, para iniciar sesion aprete aqui</p>
            <Link to="/login"><button>iniciar sesion</button></Link>
        </div>
        </div>""
        </>
    )
}