import { useParams } from "react-router-dom";
import { HomeHeader, Footer, NewsContent } from "../components/ui/index";
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
    <>
      <HomeHeader />
      <div className="relative top-16">
        <NewsContent news={news} />
        <Footer />
      </div>
    </>
  );
}

export default NewsLetter;
