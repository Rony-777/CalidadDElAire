import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRouter() {
    const Auth= useAuth();
    return Auth.isAuthenticated ? <Outlet/> : <Navigate to="/" />
}