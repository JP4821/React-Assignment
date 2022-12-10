import logo from "./logo.svg";
import "./App.css";
import Postview from "./PostView/postview";
import LandingPage from "./LandingPage/landing_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/postview" element={<Postview />} />
        </Routes>
      </BrowserRouter>
      {/* <Postview /> */}
    </div>
  );
}

export default App;
