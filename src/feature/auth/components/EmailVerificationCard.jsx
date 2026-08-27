import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import {
  useVerifyEmail
} from "../hooks/useVerifyEmail";



const EmailVerificationCard = () => {


  const [searchParams] = useSearchParams();

  const navigate = useNavigate();


  const token = searchParams.get("token");


  const verificationStarted = useRef(false);


  const [verified, setVerified] = useState(false);



  const {
    mutate,
    isSuccess,
    isError,
    error
  } = useVerifyEmail();




  useEffect(() => {


    if (
      token &&
      !verificationStarted.current
    ) {


      verificationStarted.current = true;


      mutate(token, {

        onSuccess: () => {

          setVerified(true);

        }

      });


    }


  }, [token]);






  useEffect(() => {


    if (verified || isSuccess) {


      const timer = setTimeout(() => {


        navigate("/login");


      }, 3000);



      return () => clearTimeout(timer);


    }


  }, [
    verified,
    isSuccess,
    navigate
  ]);







  const status =

    verified || isSuccess

      ? "success"

      : isError

      ? "error"

      : "pending";







  const content = {

    pending: {

      title: "Verifying your email",

      description:
        "Please wait while we confirm your account."

    },


    success: {

      title: "Email verified",

      description:
        "Your account is ready. Redirecting to login..."

    },


    error: {

      title: "Verification failed",

      description:
        error?.response?.data?.detail ||
        "Invalid verification token"

    }


  };






  return (

    <div
      className="
      rounded-[2rem]
      border
      border-white/10
      bg-[#101b25]
      p-10
      text-center
      shadow-2xl
      "
    >



      <div
        className={`
        mx-auto
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full

        ${
          status === "success"

          ?

          "bg-lime-300/10 text-lime-300"

          :

          status === "error"

          ?

          "bg-red-500/10 text-red-400"

          :

          "bg-cyan-300/10 text-cyan-300"

        }

        text-4xl
        font-bold
        `}
      >


        {
          status === "success"

          ?

          "✓"

          :

          status === "error"

          ?

          "!"

          :

          <div
            className="
            h-10
            w-10
            animate-spin
            rounded-full
            border-4
            border-cyan-300
            border-t-transparent
            "
          />

        }


      </div>





      <h2
        className="
        mt-8
        text-3xl
        font-black
        text-white
        "
      >

        {content[status].title}

      </h2>





      <p
        className="
        mt-4
        text-sm
        text-slate-400
        "
      >

        {content[status].description}

      </p>





      {
        status === "success" && (

          <button

            onClick={() => navigate("/login")}

            className="
            mt-8
            w-full
            rounded-xl
            bg-lime-300
            py-3.5
            font-bold
            text-black
            hover:bg-lime-200
            transition
            "

          >

            Continue Login

          </button>

        )
      }






      {
        status === "error" && (

          <button

            onClick={() => navigate("/register")}

            className="
            mt-8
            w-full
            rounded-xl
            border
            border-white/10
            py-3.5
            text-white
            hover:bg-white/5
            "

          >

            Back to Register

          </button>

        )
      }



    </div>

  );


};



export default EmailVerificationCard;