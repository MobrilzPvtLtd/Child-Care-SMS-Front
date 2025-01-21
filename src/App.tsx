import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./UI/Layout/Layout";
import Home from "./pages/Home/Home";
import BrandValue from "./pages/Brand Value/BrandValue";

function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-value" element={<BrandValue />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
