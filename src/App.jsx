import Hero from './components/Hero';
import Services from './components/Services';
import Enrichment from './components/Enrichment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500" />
            <span className="font-semibold">Tracefort</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Solutions</a>
            <a href="#enrichment" className="hover:text-slate-900">Data Enrichment</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#resources" className="hover:text-slate-900">Resources</a>
          </nav>
          <div className="flex gap-2">
            <a href="#contact" className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">Contact</a>
            <a href="#demo" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Request Demo</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Enrichment />

        {/* Simple pricing preview section */}
        <section id="pricing" className="w-full bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Flexible subscriptions with add-ons for Aura, Crypto Compliance, and advanced Data Enrichment.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { name: 'Starter', price: '$499/mo', features: ['Shield', 'Identity', 'Email support'] },
                { name: 'Growth', price: '$1,499/mo', features: ['Pulse', 'Advanced analytics', 'Priority support'] },
                { name: 'Enterprise', price: 'Custom', features: ['Aura', 'Crypto Compliance', 'SLA & SSO'] },
              ].map((t) => (
                <div key={t.name} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <div className="mt-2 text-3xl font-bold">{t.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />{f}</li>
                    ))}
                  </ul>
                  <a href="#demo" className="mt-6 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Choose plan</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources and Legal anchors */}
        <section id="resources" className="w-full bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { title: 'API Docs', desc: 'Integrate quickly with our REST APIs.' },
                { title: 'Compliance Guides', desc: 'Best practices across EU/UK, US, MEA, SEA.' },
                { title: 'Whitepapers', desc: 'Deep dives into AML, eKYC, and crypto risk.' },
              ].map((r) => (
                <article key={r.title} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                  <a href="#" className="mt-4 inline-block text-sm font-semibold text-blue-700">Read more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="legal" className="w-full bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-sm text-slate-600">
            <p>Privacy Policy · Terms of Use · Data Processing Agreement · Cookie Policy</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
