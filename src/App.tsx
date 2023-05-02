import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/landingpage";
import Dashboard from "./pages/dashboard/dashboard";
import User from "./pages/user/user";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/User" element={<User />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
