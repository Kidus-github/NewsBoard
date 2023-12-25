import {
  NewsListSection,
  Footer,
  ForYouMenu,
  HomeHeader,
} from "../components/ui/index";
import { useEffect, useState } from "react";

function ForYouPage() {
  const [news, setNews] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.log("dataFailed"));
  }, []);
  return (
    <>
      <HomeHeader />
      <div className="relative top-16">
        <ForYouMenu />
        <NewsListSection news={news} />
        <Footer />
      </div>
    </>
  );
}

export default ForYouPage;
