import { Link } from "react-router-dom";

export default function FarmingTips({ user }) {
  if (!user) {
    return (
      <div className="card">
        <h2 className="text-xl">🌾 Vidokezo vya Kilimo</h2>
        <p>Tafadhali weka profaili yako kwanza.</p>
        <Link to="/" className="nav-link">Nenda kwenye Profaili</Link>
      </div>
    );
  }

  const { name, role, location, language, learningStyle } = user;

  const advice = {
    Narok: {
      Kiswahili: {
        text: "Panda mahindi sugu ukame na geuza kwa maharage.",
        story: "Katika Narok, Mama Naserian alipanda maharage baada ya mahindi — udongo ulikaa wenye rutuba na mavuno yaliboreka.",
        quiz: {
          question: "Mahindi yanapaswa kupandwa lini Narok?",
          options: ["Mara moja", "Ndani ya wiki 2", "Baada ya miezi 2"],
          answer: "Ndani ya wiki 2",
        },
      },
      Maa: {
        text: "Olme enkiruo eya lorrgata na ira ale enkuaak entoki.",
        story: "Narok enkop enki: 'Enkai mbaa aoni — inkishu enki narua.'",
        quiz: {
          question: "Ari enkiruo eya imuron?",
          options: ["Natein", "Illep orkeito", "Osioru"],
          answer: "Illep orkeito",
        },
      }
    }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || role} wa ${location || 'Narok'}!`,
      back: "← Rudi kwenye Menyu",
    },
    Maa: {
      greeting: `Supa ${name || role} oo ${location || 'Narok'}!`,
      back: "← Aing'u Menu",
    }
  };

  const t = translations[language] || translations['Kiswahili'];
  const loc = 'Narok';

  const onAnswer = (opt) => {
    const correct = opt === advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.answer;
    alert(correct ? "✅ Sahihi!" : "❌ Jaribu tena");
  };

  return (
    <div style={{ maxWidth: 720 }}>
      <div className="card">
        <h2 className="text-xl mb-2">🌾 Farming Tips</h2>
        <p className="mb-4">{t.greeting.replace(location || 'Narok', loc)}</p>

        <div className="mb-4 card bg-gray-50" style={{ padding: 12 }}>
          {learningStyle === "text" && <p>📖 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].text}</p>}

          {learningStyle === "story" && <p className="italic">📜 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].story}</p>}

          {learningStyle === "quiz" && (
            <div>
              <p>🎮 {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.question}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                {advice[loc][language === 'Maa' ? 'Maa' : 'Kiswahili'].quiz.options.map((opt, i) => (
                  <button
                    key={i}
                    aria-label={"Answer " + opt}
                    onClick={() => onAnswer(opt)}
                    className="btn btn-sm"
                    style={{ background: 'rgba(16,185,129,0.12)' }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/menu" className="btn btn-ghost">
            {translations[language].back}
          </Link>
        </div>
      </div>
    </div>
  );
}
