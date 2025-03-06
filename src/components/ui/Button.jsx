function Button({ children, className, onClick }) {
  return (
    <button
      className={`py-2 px-5 ${className} cursor-pointer font-medium  flex justify-center items-center min-w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
