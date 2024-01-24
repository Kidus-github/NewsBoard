import { Header, Footer } from "../components/ui/index";
import { useEffect, useState } from "react";
import SignupModal from "../components/modals/SignupModal";
import LoginModal from "../components/modals/LoginModal";
import UnsignedIndexBody from "../components/UnsignedIndexBody";
function UnSignedPage({ children }) {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("news");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(function () {
    fetch("http://localhost:8000/news") //category will be stated on the fetch for the news
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
      {isSignUp && <SignupModal setIsSignUp={setIsSignUp} />}
      {isLogIn && <LoginModal setIsLogIn={setIsLogIn} />}
    </>
  );
}

export default UnSignedPage;
