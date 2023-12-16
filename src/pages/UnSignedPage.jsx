import IntroSection from "../components/IntroSection";
import { Nav, Header, Card } from "../components/ui/index";
import { useEffect, useState } from "react";

function UnSignedPage() {
  const [news, setNews] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.log("dataFailed"));
  }, []);
  return (
    <div>
      <Header />
      <IntroSection />
      <Nav />
      <div className="flex flex-wrap gap-4 justify-center ">
        {news.map((post, i) => (
          <Card news={post} key={i} />
        ))}
      </div>
    </div>
  );
}

export default UnSignedPage;
