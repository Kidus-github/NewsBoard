import { useEffect, useState } from "react";
import { Button, CreateCard } from "./ui/index";
function ProfileSection({ user }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `https://localhost:7281/api/Auth/userId?token=${localStorage.getItem(
        "token"
      )}`
    )
      .then((res) => res.text())
      .then((data) => {
        fetch(`https://localhost:7281/api/User/GetUserNametBYid?id=${data}`)
          .then((res) => res.text())
          .then((data) => {
            fetch(
              `https://localhost:7281/api/Content/GetListBYUsername?Username=${data}`
            )
              .then((res) => res.json())
              .then((data) => setNews(data))
              .catch(() => console.log("dataFailed"));
          })
          .catch(() => console.log("dataFailed"));
      })
      .catch(() => console.log("data failed"));
  }, []);
  return (
    <div className="m-10 p-10 mb-0">
      <div className="flex gap-40">
        <div className="flex gap-8 mb-4 ">
          <div>
            <img
              src={user.profilePicture}
              alt={`${user.fname} Profile picture `}
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold uppercase text-3xl mb-4">{`${user.fname} ${user.lname}`}</h1>
            <div className="flex gap-4">
              <Button className="border-solid border-slate-300 rounded-md border py-1 px-4">
                Share
              </Button>
              <Button className="border-solid border-slate-300 rounded-md border py-1 px-4">
                Scroll
              </Button>
            </div>
            <div className="mt-10">2 Magazine</div>
          </div>
        </div>
        <div className="OverviewSection flex justify-between gap-52 ">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-500 uppercase">
              Subscribers
            </span>
            <span className="font-bold text-2xl">289</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-500 uppercase">
              Donations
            </span>
            <span className="font-bold text-2xl">$0.00</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-slate-500 uppercase">
              Total
            </span>
            <span className="font-bold text-2xl">$0.00</span>
          </div>
        </div>
      </div>
      <div className="my-8 px-12 h-[2px] bg-slate-200 dark:h-[1px] dark:bg-slate-500 "></div>
      <ul className="flex gap-8 mb-24">
        <ul className="flex flex-col justify-between w-[200px] h-[200px] bg-[#bcbcbc] text-white rounded-md p-2">
          <span className="uppercase font-bold text-lg">
            Create a new magazine
          </span>
          <span>Read, collect and share stories about something you love</span>
        </ul>
        {news.map((content) => (
          <li key={content.contentId}>
            <CreateCard title={content.title} contentId={content.contentId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileSection;
