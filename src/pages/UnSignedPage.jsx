import { Header, Footer } from "../components/ui/index";
import { useEffect, useState } from "react";

function UnSignedPage() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("news");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(function () {
    fetch("https://localhost:7281/api/Content") //category will be stated on the fetch for the news
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(() => console.log("dataFailed"));
  }, []);
  const bodyStyle = document.body.style;

  isSignUp || isLogIn
    ? (bodyStyle.overflowY = "hidden")
    : (bodyStyle.overflowY = "auto");
  return (
    <>
      <Header setIsSignUp={setIsSignUp} setIsLogIn={setIsLogIn} />
      {!children ? (
        <UnsignedIndexBody
          setIsSignUp={setIsSignUp}
          setCategory={setCategory}
          category={category}
          news={news}
        />
      ) : (
        children
      )}
      <Footer />
    </>
  );
}

export default UnSignedPage;
