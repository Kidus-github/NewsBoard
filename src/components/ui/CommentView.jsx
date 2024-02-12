import { useState, useEffect } from "react";

function CommentView({ comment }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://localhost:7281/api/User/${comment.userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [comment.userId]);
  return (
    // {
    //   user? ()
    // }
    <div className="p-8 flex gap-5 items-center">
      <img src={user.profilePicture} className="rounded-full w-16 h-16" />
      <div className="text-left">
        <h3 className="text-lg font-bold">{user.fname + " " + user.lname}</h3>
        <p className="text-slate-400 text-sm">{comment.commentDate}</p>
        <p className="text-lg">{comment.commentText}</p>
      </div>
    </div>
  );
}

export default CommentView;
