import { useState } from "react";
import CommentModal from "../modals/CommentModal";
import { Button, Card } from "./index";
function NewsListSection({ news }) {
  const [commentSection, setCommentSeciton] = useState(null);
  const bodyStyle = document.body.style;
  commentSection
    ? (bodyStyle.overflowY = "hidden")
    : (bodyStyle.overflowY = "auto");

  return (
    <div className="flex items-center flex-col m-2">
      <ul className="flex flex-wrap gap-12 justify-center ">
        {news.map((post, i) => (
          <li key={i}>
            <Card news={post} setCommentSeciton={setCommentSeciton} />
          </li>
        ))}
      </ul>
      {commentSection && (
        <CommentModal
          commentSection={commentSection}
          setCommentSeciton={setCommentSeciton}
        />
      )}
      <div className="m-8">
        <Button className="w-fit bg-primary text-white rounded-md">
          Read more
        </Button>
      </div>
    </div>
  );
}

export default NewsListSection;
