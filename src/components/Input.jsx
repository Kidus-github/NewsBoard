function Input({ placeholder, type }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="appearance-none border-solid rounded-md caret-[#f52828] text-white font-medium h-[44px] py-2 px-[12px] w-full"
    />
  );
}

export default Input;
