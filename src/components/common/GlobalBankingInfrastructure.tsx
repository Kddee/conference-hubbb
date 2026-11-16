import { Globe, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

interface BankingJurisdiction {
  number: string;
  country: string;
  currency: string;
  flagCode: string;
  flagEmoji: string;
  accountHolder: string;
  paymentNetworks: string;
  bankingPartner: string;
  address: string;
}

const jurisdictions: BankingJurisdiction[] = [
  {
    number: "01",
    country: "United States",
    currency: "USD Account",
    flagCode: "us",
    flagEmoji: "🇺🇸",
    accountHolder: "Eminsphere",
    paymentNetworks: "ACH",
    bankingPartner: "Community Federal Savings Bank",
    address: "5 Penn Plaza, 14th Floor, New York, NY 10001, US",
  },
  {
    number: "02",
    country: "United Kingdom",
    currency: "GBP Account",
    flagCode: "gb",
    flagEmoji: "🇬🇧",
    accountHolder: "Eminsphere",
    paymentNetworks: "FPS / BACS / CHAPS",
    bankingPartner: "Banking Circle S.A. UK Branch",
    address: "68 King William Street, London, EC4N 7HR, United Kingdom",
  },
  {
    number: "03",
    country: "European Union",
    currency: "EUR Account",
    flagCode: "eu",
    flagEmoji: "🇪🇺",
    accountHolder: "Eminsphere",
    paymentNetworks: "SEPA / SEPA Instant",
    bankingPartner: "Banking Circle Germany",
    address: "Maximilianstraße 54, 80538 München, Germany",
  },
  {
    number: "04",
    country: "Canada",
    currency: "CAD Account",
    flagCode: "ca",
    flagEmoji: "🇨🇦",
    accountHolder: "Eminsphere",
    paymentNetworks: "EFT",
    bankingPartner: "Digital Commerce Bank",
    address: "736 Meridian Road N.E, Calgary, Alberta, CA",
  },
  {
    number: "05",
    country: "Australia",
    currency: "AUD Account",
    flagCode: "au",
    flagEmoji: "🇦🇺",
    accountHolder: "Eminsphere",
    paymentNetworks: "NPP / BECS / Osko",
    bankingPartner: "BC Payments Australia Pty Ltd",
    address: "Level 11/10 Carrington St, Sydney, NSW 2000, Australia",
  },
  {
    number: "06",
    country: "Denmark",
    currency: "DKK Account",
    flagCode: "dk",
    flagEmoji: "🇩🇰",
    accountHolder: "Eminsphere",
    paymentNetworks: "DKK Local",
    bankingPartner: "Banking Circle Denmark",
    address: "Lautrupsgade 13-15, 2100 Copenhagen, Denmark",
  },
];

export const GlobalBankingInfrastructure = () => {
  return (
    <section className="relative w-full text-foreground" aria-labelledby="global-banking-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-accent/10 text-accent text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 border border-accent/20">
          <Globe className="h-3.5 w-3.5" /> Global Operations & Banking Infrastructure
        </span>
        <h2 id="global-banking-heading" className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white tracking-tight mb-3">
          Global Presence & International Payment Reach
        </h2>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          EminSphere facilitates seamless cross-border academic, research, and enterprise transactions through verified local clearing networks across 7 global jurisdictions.
        </p>
      </div>

      {/* 3-Column Country Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {jurisdictions.map((item) => (
          <div
            key={item.number}
            className="group relative bg-[#060c16]/85 hover:bg-[#091424] rounded-2xl border border-white/10 hover:border-primary/40 p-5 sm:p-6 shadow-md hover:shadow-[0_0_30px_rgba(28,231,212,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md"
          >
            <div>
              {/* Card Top: Flag, Country & Number Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                    <span className={`fi fi-${item.flagCode} fis text-2xl`} title={item.country}></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white leading-tight font-sans group-hover:text-primary transition-colors">
                      {item.country}
                    </h3>
                    <span className="inline-block mt-1 text-[10px] sm:text-[11px] font-bold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {item.currency}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {item.number}
                </span>
              </div>

              {/* Card Middle: Key-Value Details */}
              <div className="space-y-2.5 text-xs sm:text-sm border-t border-white/10 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Account Holder</span>
                  <span className="font-semibold text-white">{item.accountHolder}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/50">Payment Network{item.paymentNetworks.includes('/') ? 's' : ''}</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] tracking-wide">
                    {item.paymentNetworks}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="text-white/50 block text-[11px] uppercase tracking-wider">Banking Partner</span>
                  <span className="font-medium text-white/90 text-xs sm:text-sm mt-0.5 block">
                    {item.bankingPartner}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Bottom: Address */}
            <div className="mt-5 pt-3 border-t border-white/5 text-[11px] sm:text-xs text-white/60 flex items-start gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-destructive shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item.address}</span>
            </div>
          </div>
        ))}

        {/* Card 07: Global SWIFT (Full-Width Banner Card) */}
        <div className="md:col-span-2 lg:col-span-3 relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-gradient-to-r from-[#041221] via-[#071d33] to-[#04101d] border border-primary/30 shadow-[0_0_40px_rgba(28,231,212,0.12)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 shadow-[0_0_20px_rgba(28,231,212,0.2)]">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs font-mono font-bold bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full">
                  07
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-white font-sans">
                  Global Cross-Border Wire (SWIFT)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Banking Partner: <strong className="text-white font-semibold">The Currency Cloud Limited</strong> • 1 Sheldon Square, London, W2 6TT, United Kingdom
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
            <span className="text-xs font-semibold uppercase tracking-wider bg-white/5 text-accent px-3 py-1.5 rounded-lg border border-accent/30">
              Network: SWIFT International
            </span>
            <a
              href="mailto:info@eminsphere.com?subject=Request%20Invoice%20Details%20-%20SWIFT"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm font-bold px-5 py-2.5 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
            >
              Request Invoice Details <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Legal & Regulatory Disclosure Footer */}
      <div className="mt-8 sm:mt-10 bg-white/[0.02] border border-white/10 rounded-xl p-4 sm:p-5 text-xs text-white/60 leading-relaxed backdrop-blur-sm">
        <strong className="text-white font-semibold flex items-center gap-1.5 mb-1">
          <ShieldCheck className="h-4 w-4 text-accent inline shrink-0" />
          Regulatory & Banking Infrastructure Disclosure:
        </strong>{" "}
        The jurisdictions, banking partners, and branch addresses displayed above represent EminSphere’s authorized international multi-currency receiving facilities. These addresses denote partner financial institutions and do not constitute physical corporate offices or local legal entity registrations of EminSphere in those countries unless explicitly stated. Full account credentials are provided directly upon official invoice generation.
      </div>
    </section>
  );
};
