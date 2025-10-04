import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Learning from "./pages/Learning";
import Menu from "./pages/Menu";
import Profile from "./pages/profile";
import FarmingTips from "./pages/FarmingTips";
import Pastoralists from "./pages/Pastoralist";
import Weather from "./pages/Weather";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app-root">
  <Navbar user={user} />

        <a href="#main" className="skip-link">Skip to content</a>
        <main id="main" style={{marginTop:16}}>
          <Routes>
            {/* Public home */}
            <Route path="/home" element={<Home />} />

            {/* Profile setup (default entry point) */}
            <Route path="/" element={<Profile setUser={setUser} />} />

            {/* Pass user into Menu so it shows personalized greeting */}
            <Route path="/menu" element={<Menu user={user} />} />
            <Route path="/learning" element={<Learning user={user} />} />

            {/* Personalized sections */}
            <Route path="/farming" element={<FarmingTips user={user} />} />
            <Route path="/pastoralists" element={<Pastoralists user={user} />} />
            <Route path="/weather" element={<Weather user={user} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
