import { Link } from "react-router-dom";

export default function FarmingTips({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🌾 Farming Tips</h2>
        <p>Please set up your profile first.</p>
        <Link to="/profile" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, role, location, language, learningStyle } = user;

  // Example localized advice
  const advice = {
    Narok: {
      text: "Plant drought-resistant maize and rotate with beans.",
      story: "In Narok, Mama Naserian planted beans after maize — the soil stayed fertile and yields improved.",
      quiz: {
         question: "When should maize be planted in Narok?",
        options: ["Immediately", "Within 2 weeks", "After 2 months"],
        answer: "Within 2 weeks",
     },
    },
    Turkana: {
      text: "Use zai pits and sorghum for dry conditions.",
      story: "Turkana elders say: 'Water is life — capture it in pits before it escapes.'",
      quiz: {
        question: "What is the best method to conserve water for sorghum?",
        options: ["Zai pits", "Irrigation pipes", "Fertilizer"],
        answer: "Zai pits",
     },
    },
    Kitui: {
      text: "Try cassava and millet to withstand drought.",
      story: "In Kitui, youth groups grow cassava — feeding families even in long dry spells.",
      quiz: {
        question: "Which crops are most suitable for Kitui's dry climate?",
        options: ["Rice", "Millet and Sorghum", "Tea"],
        answer: "Millet and Sorghum",
     },
    }
  };

  // Language translations (very simple simulation)
  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || role} wa ${location}!`,
      back: "← Rudi kwenye Menyu",
    },
    Maa: {
      greeting: `Supa ${name || role} oo ${location}!`,
      back: "← Aing'u Menu",
    },
    English: {
      greeting: `Hello ${name || role} from ${location}!`,
      back: "← Back to Menu",
    }
  };

  return (
     <div className="p-6">
    <h2 className="text-xl font-bold mb-4">🌾 Farming Tips</h2>
    <p className="mb-4">{translations[language].greeting}</p>

    <div className="mb-4 p-4 border rounded bg-gray-50">
      {learningStyle === "text" && (
        <p>📖 {advice[location].text}</p>
      )}

      {learningStyle === "story" && (
        <p className="italic">📜 {advice[location].story}</p>
      )}

      {learningStyle === "quiz" && (
        <div>
          <p>🎮 {advice[location].quiz.question}</p>
          <div className="flex gap-2 mt-2">
            {advice[location].quiz.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => alert(opt === advice[location].quiz.answer ? "✅ Correct!" : "❌ Try again")}
                className="px-3 py-1 bg-green-200 rounded hover:bg-green-400"
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
