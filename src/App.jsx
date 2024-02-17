import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
import ForYouPage from "./pages/ForYouPage";
import SignedInPage from "./pages/SignedInPage";
import Profile from "./pages/Profile";
import Following from "./pages/Following";
import NewsLetter from "./pages/NewsLetter";
import { useEffect, useRef, useState } from "react";
import PublishContent from "./pages/PublishContent";

function App() {
  var token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   token.current = localStorage.getItem("token");
  // }, []);
  useEffect(() => {
    fetch(
      `https://localhost:7281/api/Auth/userId?token=${localStorage.getItem(
        "token"
      )}`
    )
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        fetch(`https://localhost:7281/api/User/${String(data)}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data);
            console.log("logedin user");
          });
      })
      .catch(() => {
        console.log("data failed");
      });
  }, [token]);

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <SignedInPage
                theme={theme}
                setTheme={setTheme}
                user={user.profilePicture}
              >
                <ForYouPage />
              </SignedInPage>
            ) : (
              <UnSignedPage />
            )
          }
        >
          {/* <Route path="newsletters" element={<></>} />
          <Route path="aboutus" element={<></>} />
          <Route path="blog" element={<></>} />
          <Route path="tools" element={<></>} />
          <Route path="publishers" element={<></>} />
          <Route path="help" element={<></>} />
          <Route path="terms" element={<></>} />
          <Route path="privacypolicy" element={<></>} />
          <Route path="sitemap" element={<></>} />
          <Route path="copyright" element={<></>} /> */}
        </Route>
        <Route
          path="profile"
          element={
            <SignedInPage
              theme={theme}
              setTheme={setTheme}
              user={user.profilePicture}
            >
              <Profile user={user} />
            </SignedInPage>
          }
        />
        <Route
          path="following"
          element={
            <SignedInPage
              theme={theme}
              setTheme={setTheme}
              user={user.profilePicture}
            >
              <Following />
            </SignedInPage>
          }
        />
        <Route
          path="publish/:id"
          element={
            <SignedInPage
              theme={theme}
              setTheme={setTheme}
              user={user.profilePicture}
            >
              <PublishContent />
            </SignedInPage>
          }
        />
        <Route
          path="newsletter/:id"
          element={
            token ? (
              <SignedInPage
                theme={theme}
                setTheme={setTheme}
                user={user.profilePicture}
              >
                <NewsLetter />
              </SignedInPage>
            ) : (
              <UnSignedPage>
                <NewsLetter />
              </UnSignedPage>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
