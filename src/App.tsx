import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/landingpage";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
