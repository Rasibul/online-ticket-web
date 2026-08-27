const AuthLayout = ({ children }) => {
  return (
    <div className="
      min-h-screen
      bg-[#07090D]
      flex
      items-center
      justify-center
      px-4
      relative
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        top-[-150px]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-lime-400/20
        blur-[160px]
        rounded-full
      " />



      <div className="
        w-full
        max-w-[460px]
        bg-[#101318]
        border
        border-[#242A33]
        rounded-3xl
        p-6
        sm:p-10
        shadow-2xl
        relative
        z-10
      ">

        {children}

      </div>


    </div>
  );
};


export default AuthLayout;