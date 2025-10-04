import { Link } from "react-router-dom";

export default function Pastoralists({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">🐄 Pastoralist Tips</h2>
        <p>Please set up your profile first.</p>
        <Link to="/" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, location, language, learningStyle } = user;

  // Localized advice
  const advice = {
    Narok: {
    text: "Move cattle to higher ground to find pasture during heavy rains.",
    story: "Narok elders say: 'The cow that moves finds grass; the one that waits goes hungry.'",
    quiz: {
      question: "What should pastoralists in Narok do when rains are heavy?",
      options: ["Keep cattle in the homestead", "Move cattle to higher ground", "Sell all cattle immediately"],
      answer: "Move cattle to higher ground",
    },
  },
  Turkana: {
    text: "Expect drought. Conserve water and plan migration early.",
    story: "Turkana wisdom: 'The herd that walks early finds the pasture.'",
    quiz: {
      question: "How can Turkana pastoralists prepare for drought?",
      options: ["Wait until animals are weak", "Conserve water and plan migration early", "Keep animals near riverbanks"],
      answer: "Conserve water and plan migration early",
    },
  },
  Kitui: {
    text: "Keep smaller herds and focus on goats, which survive better in drought.",
    story: "Kitui saying: 'The goat survives where the cow thirsts.'",
    quiz: {
      question: "Which livestock is best adapted for Kitui’s drylands?",
      options: ["Cows", "Goats", "Chickens"],
      answer: "Goats",
    },
  },
  };

  const translations = {
    Kiswahili: {
      greeting: `Habari ${name || "mfugaji"} wa ${location}!`,
      back: "← Rudi kwenye Menyu"
    },
    Maa: {
      greeting: `Supa ${name || "olmaa"} oo ${location}!`,
      back: "← Aing'u Menu"
    },
    English: {
      greeting: `Hello ${name || "Pastoralist"} from ${location}!`,
      back: "← Back to Menu"
    }
  };

  return (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">🐄 Pastoralist Advice</h2>
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
                onClick={() =>
                  alert(
                    opt === advice[location].quiz.answer
                      ? "✅ Correct!"
                      : "❌ Try again"
                  )
                }
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
