export default function Enrichment() {
  const sources = [
    'OpenCorporates',
    'OpenOwnership',
    'GLEIF / LEI',
    'Etherscan',
    'OpenSanctions',
    'Companies House',
    'Court & legal records',
    'Property records',
    'Adverse media & news',
  ];

  return (
    <section className="w-full bg-slate-50 py-16" id="enrichment">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Deep data enrichment</h2>
          <p className="mt-2 text-slate-600">
            Connect open data and premium sources to power screening, monitoring, and investigations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((s) => (
            <div key={s} className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900">{s}</h3>
                  <p className="text-sm text-slate-600">API-integrated · Audit-ready</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Why Tracefort</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Innovation: Open data, AI-first, crypto monitoring</li>
                <li>Speed: Real-time screening, instant alerts</li>
                <li>Compliance: Regulatory change alerts, audit trails</li>
                <li>Security: Enterprise-grade, GDPR-compliant</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h4 className="font-semibold text-slate-900">Industries</h4>
              <p className="mt-2 text-sm text-slate-700">
                Fintech, Banking, Crypto/DeFi, Remittance, Insurance, Payments, and Enterprise legal teams across EU/UK, US, Middle East, and Southeast Asia.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Fintech','Banking','Crypto','Remittance','Insurance','Payments'].map((i)=> (
                  <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
