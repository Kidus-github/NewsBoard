import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnSignedPage />}>
          <Route path="login" element={<></>} />
          <Route path="newsletters" element={<></>} />
          <Route path="aboutus" element={<></>} />
          <Route path="blog" element={<></>} />
          <Route path="tools" element={<></>} />
          <Route path="publishers" element={<></>} />
          <Route path="help" element={<></>} />
          <Route path="terms" element={<></>} />
          <Route path="privacypolicy" element={<></>} />
          <Route path="sitemap" element={<></>} />
          <Route path="copyright" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
