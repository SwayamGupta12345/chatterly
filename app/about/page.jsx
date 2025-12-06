export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10 border border-white/20 space-y-6">
        {/* Product Name */}
        <div className="text-center">
          <span
            className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,0.15)" }}
          >
            ChatterlyAI
          </span>
        </div>

        <h1 className="text-4xl font-bold text-purple-700 text-center">
          About This Project
        </h1>

        {/* Separator */}
        <hr className="border-gray-300 my-4" />

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Overview
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>ChatterlyAI</strong> is an AI chat project created by a
            student for learning and educational demonstration purposes. It is
            not intended as a commercial product.
          </p>
        </section>

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Purpose
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This project allows users to explore AI-powered chat functionality
            in a safe, demo environment. It helps showcase learning, practice,
            and development skills for educational use only.
          </p>
        </section>

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Contact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            For questions about this project, you can reach out to the creator
            through the platform’s available contact options.
          </p>
        </section>
      </div>
    </div>
  );
}
