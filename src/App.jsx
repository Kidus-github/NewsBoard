import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnSignedPage />}>
          <Route path="news" element={<></>} />
          <Route path="entertainment" element={<></>} />
          <Route path="technology" element={<></>} />
          <Route path="travel" element={<></>} />
          <Route path="food" element={<></>} />
          <Route path="sports" element={<></>} />
          <Route path="newsboardtv" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
