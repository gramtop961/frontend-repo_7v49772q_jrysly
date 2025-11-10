export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      {/* Static visual background fallback (no 3D) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 right-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),_transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(147,197,253,0.2),_transparent_60%)] blur-2xl" />
      </div>

      {/* gentle gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />

      <div className="relative mx-auto flex max-w-7xl items-center px-6 pt-24 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
            Tracefort · RegTech for high-velocity teams
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Modern Compliance, Automated by AI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Tracefort delivers AML, eKYC, and advanced compliance solutions with real-time intelligence and seamless integrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Request Demo
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50">
              Contact Sales
            </a>
          </div>

          {/* quick nav tiles */}
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm">
            {[
              { key: 'shield', label: 'Shield · AML Screening' },
              { key: 'pulse', label: 'Pulse · Transaction Monitoring' },
              { key: 'identity', label: 'Identity · eKYC' },
              { key: 'aura', label: 'Aura · AI Compliance' },
              { key: 'crypto', label: 'Crypto Compliance' },
            ].map((item) => (
              <a key={item.key} href={`#${item.key}`} className="group inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-slate-700 ring-1 ring-slate-200 backdrop-blur transition hover:ring-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="group-hover:text-slate-900">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
