import {
useForm
} from "react-hook-form";


const RegisterForm =()=>{


const {
register,
handleSubmit
}=useForm();



const onSubmit=(data)=>{

console.log(data)

}



return (

<form
onSubmit={handleSubmit(onSubmit)}
className="space-y-5"
>


{/* Logo */}

<div className="
flex
justify-center
mb-8
">


<div className="
w-16
h-16
rounded-2xl

bg-lime-400

flex
items-center
justify-center

text-black
font-bold
text-xl

shadow-lg
shadow-lime-400/30

">

TB

</div>


</div>




{/* Header */}

<div className="
text-center
mb-8
">


<h1 className="
text-3xl
sm:text-4xl
font-bold
text-white
">

Create account

</h1>


<p className="
mt-3
text-sm
text-gray-400
">

Book your journey with ease

</p>


</div>





<Input
label="Username"
placeholder="Enter username"
register={register}
name="username"
/>


<Input
label="Email Address"
placeholder="Enter email"
register={register}
name="email"
/>


<Input
label="Phone Number"
placeholder="+880 1XXXXXXXXX"
register={register}
name="phone"
/>


<Input
label="Password"
placeholder="••••••••"
type="password"
register={register}
name="password"
/>






<button

className="
w-full

mt-4

rounded-xl

py-3.5


bg-lime-400

text-black

font-semibold


hover:bg-lime-300

transition-all

duration-300

hover:shadow-lg

hover:shadow-lime-400/30


"


>


Create Account


</button>






<div className="
flex
items-center
gap-3
my-6
">


<div className="
h-px
bg-[#292F38]
flex-1
"/>


<span className="
text-xs
text-gray-500
">

or continue with

</span>



<div className="
h-px
bg-[#292F38]
flex-1
"/>


</div>






<button

type="button"

className="
w-full

border
border-[#303641]

rounded-xl

py-3

text-white

hover:bg-[#171B22]

transition

"

>


Continue with Google


</button>






<p className="
text-center
text-sm
text-gray-400
mt-7
">


Already have an account?


<span className="
text-lime-400
font-medium
cursor-pointer
ml-1
">

Login

</span>


</p>



</form>


)

}





const Input=({
label,
placeholder,
type="text",
register,
name
})=>{


return (

<div>


<label className="
text-sm
text-gray-300
block
mb-2
">

{label}

</label>


<input

type={type}

placeholder={placeholder}

{...register(name)}


className="

w-full

bg-[#080A0D]

border
border-[#303641]


rounded-xl


px-4

py-3.5


text-white


placeholder:text-gray-600


outline-none


focus:border-lime-400


focus:ring-2

focus:ring-lime-400/20


transition


"


/>


</div>


)

}


export default RegisterForm;