import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ setUser }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("farmer");
  const [location, setLocation] = useState("Narok");
  const [language, setLanguage] = useState("English");
  const [learningStyle, setLearningStyle] = useState("text");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, role, location, language, learningStyle });
    navigate("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">👤 Set up your profile</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64">

        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />

        {/* Role */}
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded">
          <option value="farmer">🌾 Farmer</option>
          <option value="pastoralist">🐄 Pastoralist</option>
          <option value="student">🎓 Student</option>
        </select>

        {/* Location */}
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 rounded">
          <option value="Narok">Narok</option>
          <option value="Turkana">Turkana</option>
          <option value="Kitui">Kitui</option>
        </select>

        {/* Language */}
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded">
          <option value="English">English</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="Maa">Maa (Maasai)</option>
        </select>

        {/* Learning Style */}
        <select value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} className="border p-2 rounded">
          <option value="text">📖 Text Summary</option>
          <option value="story">📜 Story/Proverb</option>
          <option value="quiz">🎮 Quiz Mode</option>
        </select>

        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Save & Continue
        </button>
      </form>
    </div>
  );
}
