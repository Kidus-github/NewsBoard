import { NewsListSection, ForYouMenu } from "../components/ui/index";
import PersonalizedForYouModal from "../components/modals/PersonalizedForYouModal";
import { useEffect, useState } from "react";

function ForYouPage() {
  const [news, setNews] = useState([]);
  const [niche, setNiche] = useState(false);
  useEffect(function () {
    fetch("https://localhost:7281/api/Content") //category will be stated on the fetch for the news
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.log("dataFailed"));
  }, []);
  return (
    <div className="dark:bg-black">
      <div className="relative top-16 dark:bg-black dark:text-white">
        <ForYouMenu niche={niche} setNiche={setNiche} />
        <NewsListSection news={news} />
        {niche && <PersonalizedForYouModal niche={niche} setNiche={setNiche} />}
      </div>
    </div>
  );
}

export default ForYouPage;
