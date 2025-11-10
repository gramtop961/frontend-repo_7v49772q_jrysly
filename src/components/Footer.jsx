export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Tracefort</h3>
            <p className="mt-2 text-sm text-slate-600">Modern compliance, automated by AI.</p>
            <div className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Tracefort. All rights reserved.</div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Products</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><a href="#shield" className="hover:text-slate-900">Shield</a></li>
              <li><a href="#pulse" className="hover:text-slate-900">Pulse</a></li>
              <li><a href="#identity" className="hover:text-slate-900">Identity</a></li>
              <li><a href="#aura" className="hover:text-slate-900">Aura</a></li>
              <li><a href="#crypto" className="hover:text-slate-900">Crypto Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#resources" className="hover:text-slate-900">Resources</a></li>
              <li><a href="#legal" className="hover:text-slate-900">Legal</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Stay in touch</h4>
            <form className="mt-2 flex gap-2">
              <input type="email" required placeholder="Work email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Subscribe</button>
            </form>
            <p className="mt-2 text-xs text-slate-500">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
