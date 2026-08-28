import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { useRegister } from "../hooks/useRegister";
import toast from "react-hot-toast";

const transportModes = ["BUS", "TRAIN", "FLIGHT"];

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const { mutate, isPending } = useRegister();
 const onSubmit = (data)=>{


  mutate(data,{

    onSuccess:()=>{


      toast.success(
        "Account created! Please check your email for verification."
      );


      setTimeout(()=>{

        // navigate("/verify-email");

      },1500);


    },


    onError:(error)=>{


      toast.error(

        error?.response?.data?.detail ||
        "Registration failed"

      );


    }


  });


};

  return (
    <main className="min-h-screen overflow-hidden bg-[#08111a] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-4 py-8 sm:px-8 lg:px-14">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative z-10 grid w-full gap-8 lg:grid-cols-[1fr_460px] lg:gap-16">
          <section className="hidden min-h-[650px] flex-col justify-between rounded-[2rem] border border-white/10 bg-[#102332]/80 p-8 shadow-2xl backdrop-blur-sm sm:p-12 lg:flex">
            <div>
              <div className="mb-16 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300 font-black tracking-tight text-[#0b171e] shadow-lg shadow-lime-300/20">TB</div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">TripBoard</span>
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">One account. Every route.</p>
              <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-white xl:text-7xl">
                Go further,<br /><span className="text-cyan-300">without the hassle.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-slate-300">Compare routes, find better fares, and keep every ticket in one calm little travel desk.</p>
            </div>

            <div className="relative mt-16 h-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1823] p-5">
              <div className="absolute left-10 right-10 top-1/2 border-t border-dashed border-cyan-300/50" />
              <div className="absolute left-[18%] top-[40%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_0_6px_rgba(190,242,100,.12)]" />
              <div className="absolute right-[18%] top-[40%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(103,232,249,.12)]" />
              <div className="absolute left-[18%] top-5 text-xs text-slate-400">DHAKA</div>
              <div className="absolute right-[18%] top-5 text-xs text-slate-400">COX'S BAZAR</div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#102332] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-lime-300">YOUR NEXT ROUTE</div>
              <div className="absolute bottom-5 left-5 flex gap-2">
                {transportModes.map((mode) => <span key={mode} className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-400">{mode}</span>)}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[460px] rounded-[2rem] border border-white/10 bg-[#101b25]/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 lg:mx-0">
            <div className="mb-8 flex items-center justify-between sm:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 font-black text-[#0b171e]">TB</div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">TripBoard</span>
            </div>
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Start your journey</p>
              <h2 className="text-3xl font-black tracking-tight text-white">Create your account</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">Your next destination is closer than you think.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Field label="Username" name="username" placeholder="e.g. travelwithana" register={register} error={errors.username} />
              <Field label="Email address" name="email" type="email" placeholder="you@example.com" register={register} error={errors.email} />
              <Field label="Phone number" name="phone" type="tel" placeholder="+880 1XXXXXXXXX" register={register} error={errors.phone} />
              <Field label="Password" name="password" type="password" placeholder="At least 8 characters" register={register} error={errors.password} />
              <button type="submit" disabled={isPending} className="group mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-lime-300 py-3.5 font-bold text-[#0b171e] transition hover:bg-lime-200 hover:shadow-lg hover:shadow-lime-300/20 disabled:cursor-wait disabled:opacity-60">
                {isPending ? "Creating account..." : "Create account"}
                {!isPending && <span className="text-lg transition-transform group-hover:translate-x-1">-&gt;</span>}
              </button>
            </form>

            <p className="mt-7 text-center text-xs leading-5 text-slate-500">By continuing, you agree to our terms and privacy policy.</p>
            <p className="mt-5 text-center text-sm text-slate-400">Already have an account? <button to="/login" type="button" className="ml-1 font-semibold text-lime-300 hover:text-lime-200">Log in</button></p>
          </section>
        </div>
      </div>
    </main>
  );
};

const Field = ({ label, name, type = "text", placeholder, register, error }) => (
  <div>
    <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">{label}</label>
    <input id={name} type={type} placeholder={placeholder} {...register(name)} className={`w-full rounded-xl border bg-[#09131d] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10 ${error ? "border-rose-400/80" : "border-white/10"}`} />
    {error && <p className="mt-1.5 text-xs text-rose-300">{error.message}</p>}
  </div>
);

export default RegisterPage;
