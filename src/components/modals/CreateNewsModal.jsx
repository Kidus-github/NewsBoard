import MagazineView from "../MagazineView";
import SearchInput from "../SearchInput";
import { useState } from "react";
import AddMagzineModal from "./AddMagzineModal";
function CreateNewsModal() {
  const [createNews, setCreateNews] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <div
      className={`modal-overlay top-0 w-full h-full flex justify-center items-center fixed left-0  select-none z-[999] bg-[#000000a4] ${
        close ? "hidden" : "block"
      }`}
    >
      <div className=" bg-white p-5 w-[800px] h-[98%] rounded-lg relative">
        <p className="text-3xl font-semibold">Pick a Magazine</p>
        <div
          className="border-1 rounded-full border-solid border-slate-600 text-slate-400 p-1 absolute right-4 top-4"
          onClick={() => setClose(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#0F1729"
            />
          </svg>
        </div>
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
