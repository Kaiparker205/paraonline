import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutage({token}) {
    const {user}=useContext(useContext)
    const accesToken=useAut();
    return(
        user.token==token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutage