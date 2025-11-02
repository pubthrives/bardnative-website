import { useNavigate } from "react-router-dom";
import { SearchX, ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen flex flex-col">
      <Header />

      {/* ===== 404 Section ===== */}
      <section className="flex flex-col items-center justify-center flex-grow text-center py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.08),transparent_70%)]"></div>

        <div className="relative z-10">
          <SearchX className="w-20 h-20 text-[#1E3A8A] mx-auto mb-6" />
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
            404 — Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back on track.
          </p>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-[#1E3A8A] hover:bg-[#162a6a] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}