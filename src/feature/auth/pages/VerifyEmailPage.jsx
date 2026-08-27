import EmailVerificationCard from "../components/EmailVerificationCard";

const VerifyEmailPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08111a] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-360 items-center px-4 py-8 sm:px-8 lg:px-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)] bg-size-[56px_56px] opacity-60" />
        <div className="pointer-events-none absolute -left-48 top-1/4 h-120 w-120 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-48 bottom-0 h-136 w-136 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1fr_500px] lg:gap-20">
          <section className="hidden lg:block">
            <div className="mb-16 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300 font-black tracking-tight text-[#0b171e] shadow-lg shadow-lime-300/20">TB</div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">TripBoard</span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300">Almost ready to roll</p>
            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight xl:text-7xl">Confirm your email.<br /><span className="text-cyan-300">Unlock every journey.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-slate-300">One quick stop before you can compare routes, collect tickets, and travel with less waiting around.</p>

            <div className="mt-14 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-[#0b171e]">1</span>
              <span className="h-px w-12 bg-lime-300/60" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300 text-cyan-300">2</span>
              <span className="h-px w-12 bg-white/10" />
              <span>Travel</span>
            </div>
          </section>

          <section className="mx-auto w-full max-w-125 lg:mx-0">
            <div className="mb-7 flex items-center justify-between lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 font-black text-[#0b171e]">TB</div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">TripBoard</span>
            </div>
            <EmailVerificationCard />
          </section>
        </div>
      </div>
    </main>
  );
};

export default VerifyEmailPage;
