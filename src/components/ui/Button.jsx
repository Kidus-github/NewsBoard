function Button({ children, className, onClick }) {
  return (
    <button
      className={`${className} cursor-pointer font-medium py-2 px-5 flex justify-center items-center min-w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
