import { Wallet, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Wallet className="text-cyan-400" size={32} />
              <h2 className="text-2xl font-bold">MeshPay</h2>
            </div>

            <p className="text-slate-400 leading-7">
              A secure digital wallet built using the MERN Stack with JWT
              authentication, peer-to-peer money transfers, and transaction
              history.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Product</h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Features
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Dashboard
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Wallet
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Transactions
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Resources</h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                API
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Support
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>

            <div className="flex items-center gap-3 text-slate-400 mb-4">
              <Mail size={20} />
              <span>meshpay@gmail.com</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-cyan-500 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-4 py-2 bg-slate-800 rounded-lg hover:bg-cyan-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 MeshPay. All Rights Reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Built with ❤️ using React, Node.js, Express & MongoDB
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;