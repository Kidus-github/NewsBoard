import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
import ForYouPage from "./pages/ForYouPage";
import SignedInPage from "./pages/SignedInPage";
import Profile from "./pages/Profile";
import Following from "./pages/Following";
import NewsLetter from "./pages/NewsLetter";
import { useState } from "react";
function App() {
  const [LogIn, setLogIn] = useState(true);
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
          path="login"
          element={
            <SignedInPage>
              <ForYouPage />
            </SignedInPage>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="following" element={<Following />} />
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
