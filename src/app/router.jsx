import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../feature/auth/pages/RegisterPage";
import VerifyEmailPage from "../feature/auth/pages/VerifyEmailPage";
import LoginPage from "../feature/auth/pages/LoginPage";



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
}


]);


export default router;