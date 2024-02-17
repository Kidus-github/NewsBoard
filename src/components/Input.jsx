function Input({ placeholder, type, classname, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`appearance-none border-solid rounded-md caret-[#f52828] text-black font-medium h-[44px] py-2 px-[12px] w-full dark:text-white  ${classname}`}
      onChange={onChange}
    />
  );
}

export default Input;
