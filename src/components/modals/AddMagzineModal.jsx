import { useRef, useState } from "react";
import { Button } from "../ui/index";
import { useEffect } from "react";

function AddMagzineModal({ setCreateNews }) {
  const [title, setTitle] = useState("");
  const [titleCount, setTitleCount] = useState(0);
  const [description, setDescription] = useState("");
  const [descriptionCount, setDescriptionCount] = useState(0);
  let Author = useRef();
  let Now = new Date("2022-02-02T12:00:00");
  useEffect(() => {
    fetch(
      `https://localhost:7281/api/Auth/userId?token=${localStorage.getItem(
        "token"
      )}`
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        fetch(`https://localhost:7281/api/User/GetUserNametBYid?id=${data}`)
          .then((res) => res.text())
          .then((data) => (Author.current = data))
          .catch(() => console.log("dataFailed"));
        console.log(Author.current);
      })
      .catch(() => console.log("dataFailed"));
  }, []);

  function postData(Data) {
    try {
      const response = fetch("https://localhost:7281/api/Content", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(Data),
      }).then(() => {
        console.log("Created");
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = response.text();
      console.log("Response:", responseData);
      // Handle response data
    } catch (error) {
      console.error("There was a problem with the POST request:", error);
      // Handle error
    }
  }

  function handleCreate() {
    postData({
      contentId: "",
      title: title,
      description: description,
      url: "string",
      author: Author.current,
      publicationStatus: "pending",
      publicationDate: "2024-02-11T03:43:08.841Z",
      categoryId: "string",
      image: [
        "", //to be edited on the publish section
      ],
      video: "string", //to be edited on the publish section
      contentType: "string", //to be edited on the publish section
      keywords: ["string"],
      contentTags: [
        //to be edited on the publish section
        "string",
      ],
      contentLike: 0,
      contentViews: 0,
      contentComment: 0,
      dateCreated: Now,
    });
  }
  function handleCancel() {
    setCreateNews(false);
  }

  return (
    <div className="modal-overlay top-0 w-full h-full flex justify-center items-center fixed left-0  select-none z-[999] bg-[#000000a4]">
      <div className=" bg-white py-5 px-8 w-[800px] h-[80%] rounded-lg">
        <span>{titleCount}/80</span>
        <div className="py-4">
          <input
            type="text"
            placeholder="Add Magazine Title"
            className="uppercase font-bold text-2xl text-black p-5 bg-slate-100 w-full"
            onChange={(e) => {
              titleCount < 80 ? setTitle(e.target.value) : {}; //disable the input field
              setTitleCount((titleCount) => titleCount + 1);
            }}
          />
        </div>
        <span>{descriptionCount}/500</span>
        <div className="py-4">
          <textarea
            type="text"
            placeholder="Add a short description to let others know what you collect and share in your Magazine"
            className="text-xl text-black p-5 bg-slate-100 w-full"
            onChange={(e) => {
              descriptionCount < 500 ? setDescription(e.target.value) : {}; //disable the text field
              setDescriptionCount((descriptionCount) => descriptionCount + 1);
            }}
          />
        </div>
        <div>
          <div className="flex gap-4 py-4 items-center ">
            <input
              type="checkbox"
              name="private"
              checked
              className="p-3 text-slate-800 border-1 border-solid border-slate-200"
            />
            <p>Private</p>
          </div>
          <p className="text-slate-600 font-medium">
            You can invite contributors and change privacy settings at any time
            by visiting your profile and selecting the pencil icon or the edit
            button on your Magazine cover.
          </p>
        </div>
        <div className="flex justify-end items-center mt-20 gap-6">
          <Button
            className={
              "border-1 border-solid rounded-lg text-slate-700 border-slate-700"
            }
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            className={"bg-red-300 rounded-lg text-white"}
            onClick={() => {
              console.log("it was exectuted");
              handleCreate();
              handleCancel();
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddMagzineModal;
