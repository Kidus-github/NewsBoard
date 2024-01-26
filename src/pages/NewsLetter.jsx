import { useParams } from "react-router-dom";
import { NewsContent } from "../components/ui/index";
import { useEffect, useState } from "react";

function NewsLetter() {
  const [news, setNews] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/news/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.log("dataFailed"));
  }, [id]);

  return (
    <div className="dark:bg-black">
      <div className="pb-14 dark:text-white">
        <NewsContent news={news} />
      </div>
    </div>
  );
}

export default NewsLetter;
