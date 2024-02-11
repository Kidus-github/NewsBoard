import MagazineView from "../MagazineView";
import SearchInput from "../SearchInput";
import { useState } from "react";
import AddMagzineModal from "./AddMagzineModal";
function CreateNewsModal() {
  const [createNews, setCreateNews] = useState(false);
  return (
    <div className="modal-overlay top-0 w-full h-full flex justify-center items-center fixed left-0  select-none z-[999] bg-[#000000a4]">
      <div className=" bg-white p-5 w-[800px] h-[98%] rounded-lg">
        <p className="text-3xl font-semibold">Pick a Magazine</p>
        <div className="pt-20 px-10 pb-10">
          <SearchInput className="py-3 bg-slate-100" />
        </div>
        <div className="px-10">
          <p className="text-lg pb-4">My Magazine</p>
          <MagazineView createNews={createNews} setCreateNews={setCreateNews} />
          {createNews && <AddMagzineModal setCreateNews={setCreateNews} />}
        </div>
      </div>
    </div>
  );
}

export default CreateNewsModal;
