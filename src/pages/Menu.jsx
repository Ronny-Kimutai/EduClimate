import { Link } from "react-router-dom";
import { UI } from "../i18n";

export default function Menu({ user }) {
  if (!user) {
    return (
      <div className="card">
        <h2 className="text-xl">📋 Menyu Kuu</h2>
        <p>Tafadhali weka profaili yako kwanza.</p>
        <Link to="/" className="nav-link">Nenda kwenye Profaili</Link>
      </div>
    );
  }

  const { name, role, location, language } = user;

  const greetings = {
    Kiswahili: `Karibu ${name || role} kutoka ${location}!`,
    Maa: `Supa ${name || role} oo ${location}!`,
  };

  const greetingText = greetings[language] || greetings['Kiswahili'];
  const ui = UI[language] || UI['Kiswahili'];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div style={{maxWidth:520,width:'100%'}}>
    <h2 className="text-2xl mb-4">📋 Menyu Kuu</h2>
  <p className="mb-6 text-lg">{greetingText}</p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12}}>
          <Link to="/farming" aria-label={`Fungua ${ui.farming}`} className="card nav-link" style={{display:'block',textAlign:'center'}}>
            <div style={{fontSize:20}}>🌾</div>
            <div style={{fontWeight:700}}>{ui.farming}</div>
          </Link>

          <Link to="/pastoralists" aria-label={`Fungua ${ui.pastoralist}`} className="card nav-link" style={{display:'block',textAlign:'center'}}>
            <div style={{fontSize:20}}>🐄</div>
            <div style={{fontWeight:700}}>{ui.pastoralist}</div>
          </Link>

          <Link to="/weather" aria-label={`Fungua ${ui.weather}`} className="card nav-link" style={{display:'block',textAlign:'center'}}>
            <div style={{fontSize:20}}>☁️</div>
            <div style={{fontWeight:700}}>{ui.weather}</div>
          </Link>

          <Link to="/" aria-label={ui.profile} className="card nav-link" style={{display:'block',textAlign:'center'}}>
            <div style={{fontSize:20}}>⚙️</div>
            <div style={{fontWeight:700}}>{ui.profile}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
