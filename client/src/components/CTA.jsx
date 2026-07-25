import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Experience MeshPay?
        </h2>

        <p className="mt-6 text-xl text-cyan-100">
          Create your account today and start sending money securely in seconds.
        </p>

        <Link
          to="/register"
          className="inline-block mt-10 bg-white text-cyan-700 font-bold px-10 py-4 rounded-xl hover:scale-105 transition"
        >
          Create Free Account
        </Link>

      </div>
    </section>
  );
}

export default CTA;