import { Link } from "react-router-dom";

export default function Weather({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🌦️ Weather Updates</h2>
        <p>Please set up your profile first.</p>
        <Link to="/" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Local weather messages (mock data for demo)
  const weatherData = {
     Narok: {
    text: "Light rains expected next week. Prepare for planting.",
    story: "Narok farmers say: 'When the acacia flowers, rains will soon follow.'",
    quiz: {
      question: "What should farmers do before expected rains?",
      options: ["Prepare land", "Do nothing", "Harvest maize"],
      answer: "Prepare land"
    }
  },
  Turkana: {
    text: "Dry and hot conditions. Conserve water.",
    story: "Turkana herders: 'The dry wind warns us – move the herds to riverbeds.'",
    quiz: {
      question: "What is most important during a hot dry spell?",
      options: ["Store water", "Sell cattle", "Burn pasture"],
      answer: "Store water"
    }
  },
  Kitui: {
    text: "Scattered showers possible, good for cassava and millet.",
    story: "In Kitui, when clouds gather in the east, rains often bless the fields.",
    quiz: {
      question: "Which crop thrives with scattered rains?",
      options: ["Cassava", "Wheat", "Rice"],
      answer: "Cassava"
    }
  }
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "rafiki"} wa ${location}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "enkai"} oo ${location}!`,
      back: "← Aing'u Menu"
    },
    English: {
      greeting: `Hello ${name || "friend"} from ${location}!`,
      back: "← Back to Menu"
    }
  };

  return (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">⛅ Weather Updates</h2>
    <p className="mb-4">{translations[language].greeting}</p>

    <div className="mb-4 p-4 border rounded bg-blue-50">
      {learningStyle === "text" && (
        <p>📖 {weatherData[location].text}</p>
      )}

      {learningStyle === "story" && (
        <p className="italic">📜 {weatherData[location].story}</p>
      )}

      {learningStyle === "quiz" && (
        <div>
          <p>🎮 {weatherData[location].quiz.question}</p>
          <div className="flex gap-2 mt-2">
            {weatherData[location].quiz.options.map((opt, i) => (
              <button
                key={i}
                onClick={() =>
                  alert(
                    opt === weatherData[location].quiz.answer
                      ? "✅ Correct!"
                      : "❌ Try again"
                  )
                }
                className="px-3 py-1 bg-blue-200 rounded hover:bg-blue-400"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

    <Link to="/menu" className="text-green-600 underline">
      {translations[language].back}
    </Link>
  </div>
);

}
