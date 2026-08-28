import {
    useState
} from "react";

import {
    getAccessToken,
    removeTokens
} from "../utils/token";
import { AuthContext } from "./authContextValue";


export const AuthProvider = ({
    children
})=>{


    const [user,setUser] = useState(() => (
        getAccessToken() ? { authenticated: true } : null
    ));






    const logout =()=>{


        removeTokens();

        setUser(null);


    };






    return (

        <AuthContext.Provider

        value={{
            user,
            setUser,
            logout,
            loading: false,
            isAuthenticated:!!user
        }}

        >

            {children}

        </AuthContext.Provider>

    )
};