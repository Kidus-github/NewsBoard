function MagazineView({ createNews, setCreateNews }) {
  return (
    <div
      className=" border-[2px] border-slate-100 border-solid p-2 cursor-pointer"
      onClick={() => {
        setCreateNews(!createNews);
      }}
    >
      <div className="flex gap-4 items-center">
        <div className=" border-slate-100 border-solid w-[80px] h-[70px] rounded-xl ">
          <img src="" />
        </div>

        <div>
          <h1 className="uppercase font-semibold text-xl">New Magzine</h1>
          <h3>Create new magzine</h3>
        </div>
      </div>
    </div>
  );
}

export default MagazineView;
