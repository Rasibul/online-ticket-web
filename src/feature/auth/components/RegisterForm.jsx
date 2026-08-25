import {
useForm
} from "react-hook-form";


import {
zodResolver
} from "@hookform/resolvers/zod";


import {
registerSchema
} from "../schemas/registerSchema";


import {
useRegister
} from "../hooks/useRegister";



const RegisterForm =()=>{


const {
register,
handleSubmit,
formState:{
errors
}

}=useForm({

resolver:
zodResolver(registerSchema)

});



const {
mutate,
isPending
}=useRegister();



const onSubmit=(data)=>{


    mutate(data,{
        
        onSuccess:(response)=>{

            console.log(response);

        },


        onError:(error)=>{

            console.log(error);

        }

    });

};



return (

<form
onSubmit={
handleSubmit(onSubmit)
}
>


<input

placeholder="Username"

{...register("username")}

/>

<p>
{errors.username?.message}
</p>



<input

placeholder="Email"

{...register("email")}

/>


<p>
{errors.email?.message}
</p>



<input

placeholder="Phone"

{...register("phone")}

/>


<p>
{errors.phone?.message}
</p>



<input

type="password"

placeholder="Password"

{...register("password")}

/>


<p>
{errors.password?.message}
</p>



<button
disabled={isPending}
>

{
isPending
?
"Creating..."
:
"Register"
}


</button>


</form>

);


};


export default RegisterForm;