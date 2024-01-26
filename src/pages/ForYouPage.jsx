import { NewsListSection, ForYouMenu } from "../components/ui/index";
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
    <div className="dark:bg-black">
      <div className="relative top-16 dark:bg-black dark:text-white">
        <ForYouMenu />
        <NewsListSection news={news} />
      </div>
    </div>
  );
}

export default ForYouPage;
