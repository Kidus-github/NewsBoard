function Button({ children, type }) {
  return (
    <div
      className={
        type === "solid"
          ? "bg-primary text-white font-medium py-2 px-5 rounded-md flex justify-center items-center min-w-fit"
          : type === "empty"
          ? "bg-none text-slate-700 border-slate-700 font-medium py-2 px-5 flex justify-center items-center min-w-fit"
          : "bg-none text-slate-700 font-medium py-2 px-5 flex justify-center items-center min-w-fit"
      }
    >
      {children}
    </div>
  );
}

export default Button;
