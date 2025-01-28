import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import BrandValue from "./pages/Brand Value/BrandValue";
import Services from "./pages/Services/Page";
import ContactUs from "./pages/Contact Us/ContactUs";
import PrivacyPolicy from "./pages/Privacy Policy/PrivacyPolicy";
import TermCondition from "./pages/Term&Condition/Term&Condition";
import { Register } from "./pages/Register/Register";

function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-value" element={<BrandValue />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermCondition />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
