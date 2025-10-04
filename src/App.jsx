import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Profile from "./pages/profile";
import FarmingTips from "./pages/FarmingTips";
import Pastoralists from "./pages/Pastoralist";
import Weather from "./pages/Weather";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Profile setup (default entry point) */}
        <Route path="/" element={<Profile setUser={setUser} />} />

        {/* Pass user into Menu so it shows personalized greeting */}
        <Route path="/menu" element={<Menu user={user} />} />

        {/* Personalized sections */}
        <Route path="/farming" element={<FarmingTips user={user} />} />
        <Route path="/pastoralists" element={<Pastoralists user={user} />} />
        <Route path="/weather" element={<Weather user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
