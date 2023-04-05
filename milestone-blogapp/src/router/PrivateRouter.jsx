
 import { Navigate, Outlet } from "react-router-dom";
 
 const PrivateRouter = () => {
       const currentUser = false
 
   return currentUser ? <Outlet /> : <Navigate to="/" />;
 };
 
 export default PrivateRouter;
 