import { Link } from "react-router-dom";

export default function Pastoralists({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🐄 Vidokezo vya Ufugaji</h2>
        <p>Tafadhali weka profaili yako kwanza.</p>
        <Link to="/" className="text-green-600 underline">Nenda kwenye Profaili</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Localized advice
  const advice = {
    Narok: {
      Kiswahili: {
        text: "Hamisha ng'ombe kwenye maeneo ya juu kupata malisho wakati wa mvua kubwa.",
        story: "Wazee wa Narok husema: 'Ng'ombe anayesogea hupata majani; anayesubiri ana njaa.'",
        quiz: {
          question: "Nini wakulima wa mifugo Narok wafanye wakati mvua ni nyingi?",
          options: ["Walaishi mifugo katika nyumba", "Wahamie mifugo maeneo ya juu", "Wauze kila ng'ombe mara moja"],
          answer: "Wahamie mifugo maeneo ya juu",
        }
      },
      Maa: {
        text: "Amu olmarasa na ilagaa, imuto iling'ana ole enkiteng'oni.",
        story: "Enkop Narok: 'Elo enkirua eito olme; ilosh oo aamu naa.'",
        quiz: {
          question: "Ari enkiruo eya aongo Narok arie?",
          options: ["Ishule eitaa", "Ita umau ornyoo", "Oloin esiai"],
          answer: "Ita umau ornyoo",
        }
      }
    }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "mfugaji"} wa ${location || 'Narok'}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "olmaa"} oo ${location || 'Narok'}!`,
      back: "← Aing'u Menu"
    }
  };

  const t = translations[language] || translations['Kiswahili'];
  const loc = location || 'Narok';

  return (
  <div style={{maxWidth:720}}>
    <div className="card">
  <h2 id="pastoralist-heading" className="text-xl mb-2">🐄 Pastoralist Advice</h2>
  <p className="mb-4">{t.greeting.replace(location || 'Narok', loc)}</p>

      <div className="mb-4 card bg-gray-50" style={{padding:12}}>
        {learningStyle === "text" && (
          <p>📖 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].text}</p>
        )}

        {learningStyle === "story" && (
          <p className="italic">📜 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].story}</p>
        )}

        {learningStyle === "quiz" && (
          <div>
            <p>🎮 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.question}</p>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.options.map((opt, i) => (
                <button
                  key={i}
                  aria-label={`Answer ${opt}`}
                  onClick={() =>
                    alert(
                      opt === advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.answer
                        ? "✅ Sahihi!"
                        : "❌ Jaribu tena"
                    )
                  }
                  className="btn btn-sm"
                  style={{background:'rgba(16,185,129,0.12)'}}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <Link to="/menu" className="btn btn-ghost">{t.back}</Link>
      </div>
    </div>
  </div>
);

}
