import { useParams } from "react-router-dom";
import { Footer, NewsContent } from "../components/ui/index";
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
    <div className="mb-4">
      <NewsContent news={news} />
    </div>
  );
}

export default NewsLetter;
