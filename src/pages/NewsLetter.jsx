import { useParams } from "react-router-dom";
import { NewsContent } from "../components/ui/index";
// import CommentModal from "../components/modals/CommentModal";
import { useEffect, useState } from "react";

function NewsLetter() {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const apiUrl = `http://localhost:8000/news/${id}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, [apiUrl]);
  return (
    <div className="dark:bg-black">
      <div className="pb-14 dark:text-white">
        <NewsContent news={news} />
      </div>
    </div>
  );
}

export default NewsLetter;
