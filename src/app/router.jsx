import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "../feature/auth/pages/RegisterPage";
import VerifyEmailPage from "../feature/auth/pages/VerifyEmailPage";



const router=createBrowserRouter([


{
path:"/register",
element:<RegisterPage/>
},

{
path:"/verify-email",
element:<VerifyEmailPage/>
}


]);


export default router;