import {
  Atom,
  Database,
  Server,
  ShieldCheck,
  Code2,
  Boxes,
} from "lucide-react";

const technologies = [
  {
    icon: <Atom size={28} />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <Server size={28} />,
    name: "Express",
    color: "text-green-400",
  },
  {
    icon: <Database size={28} />,
    name: "MongoDB",
    color: "text-emerald-400",
  },
  {
    icon: <ShieldCheck size={28} />,
    name: "JWT",
    color: "text-yellow-400",
  },
  {
    icon: <Code2 size={28} />,
    name: "REST API",
    color: "text-pink-400",
  },
  {
    icon: <Boxes size={28} />,
    name: "Tailwind",
    color: "text-blue-400",
  },
];

function TrustBar() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-slate-400 uppercase tracking-widest mb-10">
          Built With Modern Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-cyan-400 hover:scale-105 transition duration-300"
            >
              <div className={tech.color}>{tech.icon}</div>

              <p className="mt-4 font-semibold text-white">
                {tech.name}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustBar;