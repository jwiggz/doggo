import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🐕</span>
              <span className="text-xl font-black tracking-tight text-cream">DOGGO</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Running with rescue dogs to help them find forever homes.
              Every mile matters. Every dog deserves a chance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/dogs", label: "Meet the Dogs" },
                { href: "/runs", label: "Run Videos" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/60 hover:text-orange transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Our Partners</h3>
            <ul className="space-y-2">
              {[
                { href: "https://www.wihumane.org/", label: "Wisconsin Humane Society" },
                { href: "https://fetchwi.org/", label: "Fetch Wisconsin" },
                { href: "https://www.rescueme.org/", label: "Rescue Me" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-orange transition-colors text-sm"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-cream/40 text-xs">
          Not affiliated with any shelter. Just a person who loves dogs and running.
        </div>
      </div>
    </footer>
  );
}
