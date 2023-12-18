import IntroSection from "../components/IntroSection";
import { Nav, Header, NewsListSection, Footer } from "../components/ui/index";
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
    <>
      <Header />
      <IntroSection />
      <Nav />
      <NewsListSection news={news} />
      <Footer />
    </>
  );
}

export default UnSignedPage;