import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAut from "./useAut";

const RequireAuth = ({ allowedRole }) => {
    const location = useLocation();
    const accesToken=useAut();
    return (
            accesToken===allowedRole
            ? <Outlet />
            : accesToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;