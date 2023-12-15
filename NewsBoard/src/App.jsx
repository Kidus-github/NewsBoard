import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnSignedPage from "./pages/UnSignedPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnSignedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
