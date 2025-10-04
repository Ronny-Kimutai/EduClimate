import { Link } from "react-router-dom";

export default function Weather({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🌦️ Taarifa za Hali ya Hewa</h2>
        <p>Tafadhali weka profaili yako kwanza.</p>
        <Link to="/" className="text-green-600 underline">Nenda kwenye Profaili</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Local weather messages (Narok only, with Kiswahili + Maa)
  const weatherData = {
    Narok: {
      Kiswahili: {
        text: "Mvua za kawaida zinaweza kunyesha wiki ijayo. Jiandae kwa kupanda.",
        story: "Wakulima wa Narok husema: 'Ukua akacia maua, mvua zitakuja hivi karibuni.'",
        quiz: {
          question: "Wakulima wanapaswa kufanya nini kabla ya mvua inayotarajiwa?",
          options: ["Tayarisha shamba", "Usifanye chochote", "Chuma mahindi"],
          answer: "Tayarisha shamba"
        }
      },
      Maa: {
        text: "Emunyata olomei enkiteng'ani. Enkai aito he entoki.",
        story: "Narok enkishu: 'Isha olmarashai — enki iltung'ani.'",
        quiz: {
          question: "Amu olme emunyata?",
          options: ["Etoin olokol", "Awik eitu", "Neti"],
          answer: "Etoin olokol"
        }
      }
    }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "rafiki"} wa ${location || "Narok"}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "enkai"} oo ${location || "Narok"}!`,
      back: "← Aing'u Menu"
    }
  };

  // safe derived values: prefer provided language/location, otherwise fallback
  const t = translations[language] || translations['Kiswahili'];
  const loc = location || 'Narok';
  const style = learningStyle || 'text';
  const langKey = language === 'Maa' ? 'Maa' : 'Kiswahili';

  return (
    <div style={{maxWidth:720}}>
      <div className="card">
  <h2 className="text-xl mb-2">☁️ Taarifa za Hali ya Hewa</h2>
  <p className="mb-4">{t.greeting.replace(location || 'Narok', loc)}</p>

        <div className="mb-4 card bg-blue-50" style={{padding:12}}>
          {style === "text" && (
            <p>📖 {weatherData[loc][langKey].text}</p>
          )}

          {style === "story" && (
            <p className="italic">📜 {weatherData[loc][langKey].story}</p>
          )}

          {style === "quiz" && (
            <div>
              <p>🎮 {weatherData[loc][langKey].quiz.question}</p>
              <div style={{display:'flex',gap:8,marginTop:8}}>
                {weatherData[loc][langKey].quiz.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      alert(
                        opt === weatherData[loc][langKey].quiz.answer
                          ? "✅ Sahihi!"
                          : "❌ Jaribu tena"
                      )
                    }
                    className="btn btn-sm"
                    style={{background:'rgba(59,130,246,0.12)'}}
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
