import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../feature/auth/pages/RegisterPage";
import VerifyEmailPage from "../feature/auth/pages/VerifyEmailPage";
import LoginPage from "../feature/auth/pages/LoginPage";
import ProtectedRoute from "../routes/ProtectedRoute";
import DashboardPage from "../feature/dashboard/pages/DashboardPage";



const router=createBrowserRouter([


{
path:"/register",
element:<RegisterPage/>
},

{
path:"/verify-email",
element:<VerifyEmailPage/>
},

{
 path:"/login",
 element:<div><LoginPage/></div>
},

{
path:"/dashboard",

element:<ProtectedRoute>

<DashboardPage/>

</ProtectedRoute>

}


]);


export default router;