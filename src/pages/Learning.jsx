import { lessons } from "../data/lessons";
import { useEffect, useMemo, useState } from "react";
import { UI } from "../i18n";

export default function Learning({ user }) {
  const [selected, setSelected] = useState(null);
  const [msg, setMsg] = useState("");
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('bookmarks') || '[]'); } catch { return []; }
  });
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('completed') || '[]'); } catch { return []; }
  });

  const lang = user?.language || 'Kiswahili';
  const role = user?.role || 'farmer';
  const style = user?.learningStyle || 'text';
  const ui = UI[lang] || UI['Kiswahili'];

  // Filter lessons by role and recommend by simple tag match with location/role
  const pool = useMemo(() => lessons.filter(l => l.role === role), [role]);

  // Simple ranking: prefer lessons with 'water' tag for now (could be AI in future)
  const recommended = useMemo(() => {
    return pool.sort((a,b) => (b.tags.includes('water') ? 1:0) - (a.tags.includes('water') ? 1:0));
  }, [pool]);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]);
  };

  const markComplete = (id) => {
    if (!completed.includes(id)) setCompleted(prev => [...prev,id]);
  };

  return (
    <div style={{maxWidth:900}}>
      <h2 className="text-2xl mb-4">📚 {ui.learning}</h2>
      <p className="mb-4" style={{color:'var(--muted)'}}>Kupendekeza mafunzo kulingana na jukumu lako na upendeleo wa kujifunzia.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12}}>
        {recommended.map((l) => (
          <div
            key={l.id}
            className="card"
            style={{cursor:'pointer',opacity: completed.includes(l.id)?0.7:1}}
            role="button"
            tabIndex={0}
            onClick={() => {setSelected(l);setMsg('')}}
            onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { setSelected(l); setMsg(''); e.preventDefault(); } }}
            aria-pressed={selected && selected.id === l.id}
            aria-label={`Fungua somo ${l.title?.Kiswahili || l.title}
            `}
          >
            <h3 style={{margin:0}}>{l.title[lang] || l.title['Kiswahili']}</h3>
            <p style={{color:'var(--muted)'}}>{l.summary[lang] || l.summary['Kiswahili']}</p>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}>
              <div>
                <button aria-label={`Alama soma ${l.id}`} onClick={(e)=>{e.stopPropagation(); toggleBookmark(l.id)}} className="btn btn-sm">{bookmarks.includes(l.id) ? '✖' : '🔖'}</button>
              </div>
              <div style={{display:'flex',gap:8}}>
                <button aria-label={`Soma ${l.id}`} onClick={(e)=>{e.stopPropagation(); setSelected(l); setMsg('')}} className="btn btn-sm">{ui.read}</button>
                <button aria-label={`Alama kama imekamilika ${l.id}`} onClick={(e)=>{e.stopPropagation(); markComplete(l.id)}} className="btn btn-sm btn-ghost">{completed.includes(l.id) ? 'Imekamilika' : 'Maliza'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="card mt-2" style={{marginTop:16}}>
          <h3 style={{margin:0}}>{selected.title[lang] || selected.title['Kiswahili']}</h3>
          <p style={{color:'var(--muted)'}}>{style === 'story' ? (selected.story[lang] || selected.story['Kiswahili']) : (selected.text[lang] || selected.text['Kiswahili'])}</p>
          <div style={{marginTop:8,display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button onClick={() => {setSelected(null);setMsg('')}} className="btn btn-ghost">{ui.close}</button>
            <button onClick={() => {markComplete(selected.id);setMsg('');}} className="btn btn-primary">Maliza</button>
          </div>
        </div>
      )}

      {msg && (
        <div className="card mt-2" style={{marginTop:16}}>
          <p>{msg}</p>
        </div>
      )}
    </div>
  );
}
