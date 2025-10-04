import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile({ setUser }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("farmer");
  const [location, setLocation] = useState("Narok");
  const [language, setLanguage] = useState("Kiswahili");
  const [learningStyle, setLearningStyle] = useState("text");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, role, location, language, learningStyle });
    navigate("/menu");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div style={{maxWidth:420,width:'100%'}}>
        <h2 className="text-2xl font-bold mb-6">👤 Weka Profaili Yako</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 card">
          <label style={{fontSize:13,color:'var(--muted)'}}>Jina lako (hiari)</label>
          <input
            type="text"
            placeholder="mfano: Amina"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label style={{fontSize:13,color:'var(--muted)'}}>Jukumu</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="farmer">🌾 Mkulima</option>
            <option value="pastoralist">🐄 Mfugaji</option>
          </select>

          <label style={{fontSize:13,color:'var(--muted)'}}>Eneo / Kaunti</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Narok">Narok</option>
          </select>

          <label style={{fontSize:13,color:'var(--muted)'}}>Lugha</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-2 rounded">
            <option value="Kiswahili">Kiswahili</option>
            <option value="Maa">Maa (Maasai)</option>
          </select>

          <label style={{fontSize:13,color:'var(--muted)'}}>Mtindo wa Kujifunzia</label>
          <select value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)}>
            <option value="text">📖 Muhtasari wa Maandishi</option>
            <option value="story">📜 Hadithi/Msemo</option>
            <option value="quiz">🎮 Mtihani</option>
          </select>

          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button type="button" onClick={() => {setName('');setRole('farmer');setLocation('Narok');setLanguage('Kiswahili');setLearningStyle('text')}} className="btn btn-ghost">Reset</button>
            <button type="submit" className="btn btn-primary">Save & Continue</button>
          </div>
        </form>
      </div>
    </section>
  );
}
