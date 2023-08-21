import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import ApiPage from "./components/ApiPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Axios />} />
          <Route path="/ApiPage" element={<ApiPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
