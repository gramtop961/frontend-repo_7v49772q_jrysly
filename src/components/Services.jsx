import { Shield, Activity, IdCard, Bot, Bitcoin } from 'lucide-react';

const services = [
  {
    id: 'shield',
    title: 'Shield',
    subtitle: 'AML Scanning & Sanctions Screening',
    points: [
      'Open-source powered lists',
      'Continuous screening',
      'Adverse media & PEPs',
    ],
    icon: Shield,
    accent: 'from-blue-500/10 to-blue-500/0',
  },
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'Real-Time Transaction Monitoring',
    points: [
      'Behavioral analytics',
      'Anomaly detection',
      'Blockchain support',
    ],
    icon: Activity,
    accent: 'from-sky-500/10 to-sky-500/0',
  },
  {
    id: 'identity',
    title: 'Identity',
    subtitle: 'Automated eKYC & Verification',
    points: [
      'Global ID data',
      'Scheduled re-screening',
      'LinkedIn enrichment',
    ],
    icon: IdCard,
    accent: 'from-indigo-500/10 to-indigo-500/0',
  },
  {
    id: 'aura',
    title: 'Aura',
    subtitle: 'AI Compliance Officer',
    points: [
      'Analytics & insights',
      'Risk alerting & workflow',
      'Reg change tracker',
    ],
    icon: Bot,
    accent: 'from-cyan-500/10 to-cyan-500/0',
  },
  {
    id: 'crypto',
    title: 'Crypto Compliance',
    subtitle: 'Risk scoring for wallets & addresses',
    points: [
      'Evasion & sanctions analysis',
      'Cross-chain intelligence',
      'Address clustering',
    ],
    icon: Bitcoin,
    accent: 'from-blue-400/10 to-blue-400/0',
  },
];

function ServiceCard({ s, active }) {
  const Icon = s.icon;
  return (
    <a
      href={`#${s.id}`}
      className={`group relative overflow-hidden rounded-xl border bg-white p-6 transition hover:shadow-lg ${
        active ? 'border-blue-400 ring-2 ring-blue-200' : 'border-slate-200'
      }`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent}`} />
      <div className="relative">
        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50 p-3 text-blue-600">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{s.subtitle}</p>
        <ul className="mt-4 space-y-1 text-sm text-slate-700">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 text-sm font-medium text-blue-700">Learn more →</div>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section className="relative z-10 w-full bg-white py-16" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Tracefort Solutions</h2>
            <p className="mt-1 text-slate-600">Deep data enrichment and differentiating compliance intelligence.</p>
          </div>
          <a href="#contact" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Book a demo →</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} s={s} active={false} />
          ))}
        </div>

        {/* Global CTA strip */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 p-6 text-white">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm/6 opacity-90">All services work together</p>
              <h3 className="text-lg font-semibold">Bring Shield, Pulse, Identity, Aura and Crypto into one workflow</h3>
            </div>
            <div className="flex gap-3">
              <a href="#demo" className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white/20">Request Demo</a>
              <a href="#pricing" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-slate-100">View Pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
