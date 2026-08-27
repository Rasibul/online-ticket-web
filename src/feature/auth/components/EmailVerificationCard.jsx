import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "../hooks/useVerifyEmail";

const EmailVerificationCard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const { mutate, isSuccess, isError, error } = useVerifyEmail();

useEffect(()=>{

 if(token){

    mutate(token);
 }
}, [token]);

  useEffect(() => {
    if (!isSuccess) return undefined;
    const redirectTimer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(redirectTimer);
  }, [isSuccess, navigate]);

  const status = isSuccess ? "success" : isError || !token ? "error" : "pending";
  const content = {
    pending: { eyebrow: "Checking your ticket", title: "Verifying your email", description: "We are confirming your details. This will only take a moment." },
    success: { eyebrow: "You are cleared for takeoff", title: "Email verified", description: "Your account is ready. Let’s find your next great route." },
    error: { eyebrow: "This route is unavailable", title: "Verification failed", description:  error?.response?.data?.detail ||
error?.message ||
"Verification failed"|| "This link is invalid or has expired. Please try again." },
  }[status];

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#101b25]/95 p-7 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-11">
      <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border ${status === "success" ? "border-lime-300/30 bg-lime-300/10" : status === "error" ? "border-rose-300/30 bg-rose-300/10" : "border-cyan-300/30 bg-cyan-300/10"}`}>
        {status === "pending" && <div className="h-11 w-11 animate-spin rounded-full border-4 border-cyan-300 border-t-transparent" />}
        {status === "success" && <span className="text-5xl font-light text-lime-300">✓</span>}
        {status === "error" && <span className="text-4xl font-bold text-rose-300">!</span>}
      </div>

      <p className={`mt-8 text-xs font-bold uppercase tracking-[0.24em] ${status === "error" ? "text-rose-300" : "text-cyan-300"}`}>{content.eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{content.title}</h2>
      <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-400">{content.description}</p>

      {status === "pending" && (
        <div className="mt-9 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 animate-pulse rounded-full bg-cyan-300" /></div>
      )}
      {status === "success" && <p className="mt-8 text-xs text-slate-500">Taking you to login in a few seconds...</p>}
      {status !== "pending" && (
        <button type="button" onClick={() => navigate("/login")} className={`mt-8 w-full rounded-xl py-3.5 font-bold transition ${status === "success" ? "bg-lime-300 text-[#0b171e] hover:bg-lime-200" : "border border-white/10 text-white hover:bg-white/5"}`}>
          {status === "success" ? "Continue to login  ->" : "Back to login"}
        </button>
      )}
    </div>
  );
};

export default EmailVerificationCard;
