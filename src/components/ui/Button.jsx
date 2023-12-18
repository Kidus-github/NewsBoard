function Button({ children, className }) {
  return (
    <div
      className={`${className} cursor-pointer font-medium py-2 px-5 flex justify-center items-center min-w-fit`}
    >
      {children}
    </div>
  );
}

export default Button;
