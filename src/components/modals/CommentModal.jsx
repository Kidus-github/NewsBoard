import { useEffect, useState } from "react";
import { CommentView, Button } from "../ui/index";

function CommentModal({ commentSection, setCommentSeciton }) {
  const [comment, setComment] = useState([]);
  const [content, setContent] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentCount, setCommentCount] = useState(0);

  let Now = new Date("2022-02-02T12:00:00");
  useEffect(() => {
    console.log("its clicked now");
    fetch(`https://localhost:7281/api/Comment/GetListBYid?id=${commentSection}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComment(data);
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [commentSection, commentCount, handleComment]);
  useEffect(() => {
    fetch(`https://localhost:7281/api/Content/${commentSection}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [commentSection]);

  function postData(Data) {
    const response = fetch("https://localhost:7281/api/Comment", {
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
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleComment() {
    postData({
      commentId: "",
      userId: "65ba438c901aa63ea7bec827", //user to be fetched
      contentId: content.contentId,
      commentText: commentText,
      commentDate: Now,
    });
    setCommentCount((commentCount) => commentCount + 1);
  }

  return (
    <div className=" h-full flex items-center justify-center fixed left-0 top-0 select-none w-[100%] z-[999] bg-[#000000a4]">
      <div className="flex items-center justify-center">
        <div className=" max-h-[800px] bg-[#f7f7f7] text-black relative rounded-lg max-w-[720px] text-center">
          <div className="absolute top-[8px] right-[8px] z-[11]">
            <button
              className="border-none bg-transparent cursor-pointer w-auto text-[#bcbcbc]"
              onClick={() => setCommentSeciton(null)}
            >
              <div className="items-center flex justify-center p-0">
                <svg
                  role="img"
                  aria-labelledby="closenew-icon-title"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title id="closenew-icon-title">closenew</title>
                  <path
                    d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="upper bg-[#333333] p-10 w-full flex items-center text-white gap-4 rounded-t-lg">
            <img src={content.image} className="w-48 rounded-lg h-32" />
            <div className="text-left">
              <span className="text-lg">{content.title}</span>
              <p className="mt-4">{content.author}</p>
            </div>
          </div>
          <div className="Lower max-h-[300px] overflow-y-scroll">
            {comment.map((comment, i) => (
              <CommentView key={i} comment={comment} />
            ))}
          </div>
          <div className="p-10 bg-[#f7f7f7] rounded-b-lg ">
            <div className="flex items-center border-1 border-solid border-slate-100 w-full bg-white px-4">
              <input
                type="text"
                className="p-5 flex-1 placeholder:text-left text-left"
                placeholder="Add to the Conversation..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <Button
                className="bg-[#fcbebe] text-white hover:bg-primary"
                onClick={() => {
                  setCommentText("");
                  commentText && handleComment();
                }}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
