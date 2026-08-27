import {
  useState
} from "react";

import {
  Link
} from "react-router-dom";
import {
useForm
} from "react-hook-form";


import toast from "react-hot-toast";


import {
useNavigate
} from "react-router-dom";


import {
useLogin
} from "../hooks/useLogin";


import {
setTokens
} from "../../../utils/token";

const LoginPage = () => {


  const [showPassword,setShowPassword] = useState(false);

const navigate = useNavigate();


const {
mutate,
isPending
}=useLogin();

const {
register,
handleSubmit
}=useForm();


const onSubmit=(data)=>{


mutate(data,{

onSuccess:(response)=>{


console.log(response);



setTokens({

accessToken:
response.access_token,


refreshToken:
response.refresh_token


});



toast.success(
"Login successful"
);



navigate("/dashboard");



},




onError:(error)=>{


toast.error(

error?.response?.data?.detail
||
"Invalid email or password"

);


}


});


};

  return (


    <main className="
      min-h-screen
      overflow-hidden
      bg-[#08111a]
      text-white
    ">


      <div className="
        relative
        mx-auto
        flex
        min-h-screen
        max-w-[1440px]
        items-center
        px-4
        py-8
        sm:px-8
        lg:px-14
      ">



        {/* Background Grid */}

        <div className="
          pointer-events-none
          absolute
          inset-0
          opacity-60

          [background-image:linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)]

          [background-size:56px_56px]
        " />




        {/* Glow */}

        <div className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-cyan-400/10
          blur-3xl
        " />



        <div className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-lime-300/10
          blur-3xl
        " />






        <div className="
          relative
          z-10
          grid
          w-full
          gap-10

          lg:grid-cols-[1fr_460px]

          lg:gap-20
        ">






          {/* LEFT SIDE */}

          <section className="
            hidden
            lg:block
          ">


            <div className="
              mb-16
              flex
              items-center
              gap-3
            ">


              <div className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-lime-300
                font-black
                text-[#0b171e]
                shadow-lg
                shadow-lime-300/20
              ">

                TB

              </div>


              <span className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-slate-300
              ">

                TripBoard

              </span>


            </div>





            <p className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-lime-300
            ">

              Welcome back

            </p>




            <h1 className="
              max-w-2xl
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              xl:text-7xl
            ">


              Your journey,
              <br />

              <span className="
                text-cyan-300
              ">

                continues here.

              </span>


            </h1>





            <p className="
              mt-7
              max-w-lg
              text-base
              leading-7
              text-slate-300
            ">

              Access your tickets, manage bookings, and continue exploring every destination from one place.

            </p>






            {/* Travel Card */}

            <div className="
              mt-14
              h-44
              rounded-2xl
              border
              border-white/10
              bg-[#102332]/80
              p-6
              backdrop-blur
            ">


              <div className="
                flex
                justify-between
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-slate-400
              ">

                <span>

                  DHAKA

                </span>


                <span>

                  DESTINATION

                </span>


              </div>




              <div className="
                mt-10
                flex
                items-center
                gap-4
              ">


                <div className="
                  h-3
                  w-3
                  rounded-full
                  bg-lime-300
                " />



                <div className="
                  h-px
                  flex-1
                  border-t
                  border-dashed
                  border-cyan-300/50
                " />



                <div className="
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-300
                " />


              </div>



            </div>




          </section>







          {/* LOGIN CARD */}


          <section className="
            mx-auto
            w-full
            max-w-[460px]

            rounded-[2rem]

            border
            border-white/10

            bg-[#101b25]/95

            p-6

            shadow-2xl

            backdrop-blur-xl

            sm:p-10
          ">




            <div className="
              mb-8
              flex
              items-center
              justify-between
              lg:hidden
            ">


              <div className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-lime-300
                font-black
                text-[#0b171e]
              ">

                TB

              </div>


              <span className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-400
              ">

                TripBoard

              </span>


            </div>







            <div className="mb-8">


              <p className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-cyan-300
              ">

                Sign in

              </p>



              <h2 className="
                text-3xl
                font-black
              ">

                Welcome back

              </h2>



              <p className="
                mt-2
                text-sm
                text-slate-400
              ">

                Login to manage your bookings and tickets.

              </p>


            </div>







           <form
onSubmit={handleSubmit(onSubmit)}
className="space-y-5"
>


           <Input

label="Email address"

placeholder="you@example.com"

type="email"

register={register}

name="email"

/>



              <div>


                <div className="
                  mb-2
                  flex
                  justify-between
                ">

                  <label className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-300
                  ">

                    Password

                  </label>


                  <button
                    type="button"
                    className="
                      text-xs
                      text-lime-300
                    "
                  >

                    Forgot?

                  </button>


                </div>



                <div className="relative">


               <Input

label="Password"

placeholder="Enter password"

type={showPassword ? "text" : "password"}

register={register}

name="password"

/>



                  <button

                    type="button"

                    onClick={()=>setShowPassword(!showPassword)}

                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "

                  >

                    {showPassword ? "Hide" : "Show"}

                  </button>


                </div>


              </div>







              <label className="
                flex
                items-center
                gap-3
                text-sm
                text-slate-400
              ">


                <input
                  type="checkbox"
                  className="
                  h-4
                  w-4
                  accent-lime-300
                  "
                />

                Remember me


              </label>







              <button

                type="submit"

                disabled={isPending}

                className="
                w-full
                rounded-xl
                bg-lime-300
                py-3.5
                font-bold
                text-[#0b171e]

                transition

                hover:bg-lime-200

                hover:shadow-lg

                hover:shadow-lime-300/20

                disabled:cursor-wait

                disabled:opacity-60
                "

              >

               {
isPending
?
"Signing in..."
:
"Login"
}

              </button>




            </form>








            <p className="
              mt-7
              text-center
              text-sm
              text-slate-400
            ">


              Don't have an account?


              <Link

                to="/register"

                className="
                  ml-1
                  font-semibold
                  text-lime-300
                "

              >

                Create account

              </Link>


            </p>




          </section>






        </div>


      </div>


    </main>

  )

}





const Input = ({
label,
placeholder,
type="text",
register,
name
}) => (

<div>

<label className="
mb-2
block
text-xs
font-semibold
uppercase
tracking-wider
text-slate-300
">

{label}

</label>


<input

{...register(name)}

type={type}

placeholder={placeholder}

className="
w-full
rounded-xl
border
border-white/10
bg-[#09131d]
px-4
py-3.5
text-sm
text-white
outline-none
focus:border-cyan-300

"

/>


</div>

)

export default LoginPage;