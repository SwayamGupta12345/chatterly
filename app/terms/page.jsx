export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10 border border-white/20 space-y-6">
        {/* Product Name */}
        <div className="text-center">
          <span className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
            ChatterlyAI
          </span>
        </div>

        <h1 className="text-4xl font-bold text-purple-700 text-center">
          Terms of Use
        </h1>

        {/* Separator */}
        <hr className="border-gray-300 my-4" />

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            General Use
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>ChatterlyAI</strong> is provided solely for demonstration and educational purposes. Users are expected to use the platform responsibly and within the scope of its intended demo functionality.
          </p>
        </section>

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Data & Privacy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            No payments, sensitive information, or personal data is collected, stored, or transmitted by <strong>ChatterlyAI</strong>. All data entered remains local and is used only for demo purposes.
          </p>
        </section>

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Security Disclaimer
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            While standard precautions are taken, <strong>ChatterlyAI</strong> is a demo project and may not provide full production-level security. Users should not rely on it for sensitive or critical operations.
          </p>
        </section>

        <section className="hover:bg-white/30 transition-colors rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">
            Contact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            For any questions regarding these terms of use, please contact the project creator through the platform's available contact options.
          </p>
        </section>
      </div>
    </div>
  );
}
