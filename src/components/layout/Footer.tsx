import { Globe, Mail, MapPin } from 'lucide-react';
import { CONTACT, NAV_ITEMS, SOCIALS } from '../../data/site';
import { PROGRAMS } from '../../data/content';

const LINK_COLUMNS = [
  {
    title: 'Explore',
    links: NAV_ITEMS.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    title: 'Academics',
    links: PROGRAMS.map((program) => ({
      label: program.title,
      href: '#academics',
    })),
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-xl font-bold text-ink">
              Tulas International School
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              A CBSE school where curiosity is celebrated, character is built,
              and every child is known by name — from ages 3 to 17.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-body transition-colors hover:border-brand hover:text-brand"
                >
                  {social.label === 'Email' ? (
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  ) : social.label === 'Directions' ? (
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 text-sm font-bold tracking-wider text-ink uppercase">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="text-sm text-body transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-ink uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a href="tel:+914067892026" className="transition-colors hover:text-brand">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-brand"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 text-xs text-body sm:flex-row">
          <p>
            © {CURRENT_YEAR} Tulas International School. All rights
            reserved.
          </p>
          <p>
            Crafted with care · <span className="text-brand">Admissions open 2026–27</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
