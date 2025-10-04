import { Link } from "react-router-dom";
import { UI } from "../i18n";

export default function Home() {
  const ui = UI['Kiswahili'];
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div style={{maxWidth:720,textAlign:'center'}}>
        <h1 style={{fontSize:36,marginBottom:8}}>🌍 EduClimate — Elimu ya kukabiliana na mabadiliko ya hali ya hewa</h1>
        <p className="mb-6" style={{color:'var(--muted)',fontSize:18}}>
          Mfumo huu unachanganya maarifa ya jadi na sayansi ya kisasa ya hali ya hewa, ukitoa mafunzo yaliyo wekwa kwa mazingira ya mtaa, yaliyobinafsishwa kwa mtindo wako wa kujifunzia. Lengo ni kuwezesha wakulima, wafugaji, na jamii vijijini kukabiliana na hatari za hali ya hewa.
        </p>

        <div style={{display:'flex',gap:12,justifyContent:'center'}}>
          <Link to="/menu" className="btn btn-primary">{ui.startLearning}</Link>
          <Link to="/" className="btn btn-ghost">{ui.setProfile}</Link>
        </div>

        <div className="card mt-2" style={{marginTop:24,display:'flex',gap:12,justifyContent:'center'}}>
          <div style={{minWidth:160}}>
            <h3 style={{margin:0}}>Localized Tips</h3>
            <p className="mb-4" style={{color:'var(--muted)'}}>Advice tailored to your county and role.</p>
          </div>
          <div style={{minWidth:160}}>
            <h3 style={{margin:0}}>Multiple Learning Modes</h3>
            <p className="mb-4" style={{color:'var(--muted)'}}>Text, stories, or short quizzes — choose what works.</p>
          </div>
          <div style={{minWidth:160}}>
            <h3 style={{margin:0}}>Offline Friendly</h3>
            <p className="mb-4" style={{color:'var(--muted)'}}>Simple UI that works on low-end devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
