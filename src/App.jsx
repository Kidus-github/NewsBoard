import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
import ForYouPage from "./pages/ForYouPage";
import SignedInPage from "./pages/SignedInPage";
import Profile from "./pages/Profile";
import Following from "./pages/Following";
import NewsLetter from "./pages/NewsLetter";
import { useEffect, useState } from "react";
function App() {
  const [LogIn, setLogIn] = useState(
    localStorage.getItem("LogIn")
      ? localStorage.getItem("LogIn") === "false"
        ? false
        : true
      : false
  );

  useEffect(() => {
    localStorage.setItem("LogIn", LogIn.toString());
  }, [LogIn]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            LogIn ? (
              <SignedInPage>
                <ForYouPage />
              </SignedInPage>
            ) : (
              <UnSignedPage setLogIn={setLogIn} LogIn={LogIn} />
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
            <SignedInPage>
              <Profile />
            </SignedInPage>
          }
        />
        <Route
          path="following"
          element={
            <SignedInPage>
              <Following />
            </SignedInPage>
          }
        />
        <Route
          path="newsletter/:id"
          element={
            <UnSignedPage>
              <NewsLetter />
            </UnSignedPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
