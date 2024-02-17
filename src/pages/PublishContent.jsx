import { useState } from "react";
import { useParams } from "react-router-dom";

function PublishContent() {
  const { id } = useParams();
  const [content, setContent] = useState({});
  fetch(`https://localhost:7281/api/Content/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setContent(data);
    });
  return (
    <div>
      <div className="chooseImage"></div>
      {/* <div className="video"></div>if any */}
      <div className="editTitle"></div>
      <div className="editDescription"></div>
      <div className="addURl"></div>
      <div className="ChangeStatus"></div>
      <div className="categoryId"></div>
      <div className="contentType"></div>
      <div className="KeyWords"></div>
      <div className="ContentTags"></div>
      <button>Cancel</button>
      <button>Publish</button>
    </div>
  );
}

export default PublishContent;
