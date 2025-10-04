import { Link } from "react-router-dom";

export default function Menu({ user }) {
  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">📋 Main Menu</h2>
        <p>Please set up your profile first.</p>
        <Link to="/" className="text-green-600 underline">Go to Profile</Link>
      </div>
    );
  }

  const { name, role, location, language } = user;

  const greetings = {
    Kiswahili: `Karibu ${name || role} kutoka ${location}!`,
    Maa: `Supa ${name || role} oo ${location}!`,
    English: `Welcome ${name || role} from ${location}!`,
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">📋 Main Menu</h2>
      <p className="mb-6 text-lg text-center">{greetings[language]}</p>

      <div className="flex flex-col gap-3 w-64">
        <Link to="/farming" className="bg-green-600 text-white p-3 rounded text-center">
          🌾 Farming Tips
        </Link>
        <Link to="/pastoralists" className="bg-green-600 text-white p-3 rounded text-center">
          🐄 Pastoralist Tips
        </Link>
        <Link to="/weather" className="bg-green-600 text-white p-3 rounded text-center">
          🌦️ Weather Updates
        </Link>

        {/* New button for editing profile */}
        <Link to="/" className="bg-gray-500 text-white p-3 rounded text-center mt-4">
          ⚙️ Edit Profile
        </Link>
      </div>
    </div>
  );
}
