import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">🌍 Climate Learning App</h1>
      <p className="mb-6">Empowering farmers & pastoralists with climate resilience knowledge</p>
      <Link to="/menu" className="bg-green-600 text-white px-6 py-3 rounded-lg">
        Start Learning
      </Link>
    </div>
  );
}
