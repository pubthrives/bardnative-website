const partners = [
  {
    name: "NOBETA",
    logo: "https://www.pubthrive.com/_next/image?url=%2Fpartners%2Fxandr.png&w=384&q=75",
  },
  {
    name: "ADZONE",
    logo: "https://adzone.io/website/img/adzone_arrow_5.svg",
  },
  {
    name: "RB",
    logo:
      "https://stardomlabs.com/wp-content/uploads/2015/09/Screenshot-2015-09-15-13.51.32-e1442363404397.png",
  },
  {
    name: "ACTIVE VIEW",
    logo:
      "https://lh3.googleusercontent.com/GR388MBZwhOohjb7RONGmEwPsl9CfHnEDdE8pH-MpOPVQ4yxSt_nFtgh4hhNxvXa307pWJWMq6ZXVILl41OdJMMDPnYLahC1n16m4gB_TMTc7WpYO5Q=h104",
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-200 overflow-hidden py-24"
    >
      {/* Soft Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0D1B4C]/10 blur-[160px] rounded-full opacity-40"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-[#142E6E]/10 blur-[120px] rounded-full opacity-30"></div>
      </div>

      {/* Background Grid Overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(13,27,76,0.04)_1px,transparent_1px)] bg-[size:30px_30px]"
        aria-hidden="true"
      ></div>

      {/* Section Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
            Industry Leaders
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Our global partners rely on BardNative to deliver exceptional
          performance, transparency, and scale across every impression.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-10 items-center justify-items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center transform transition-all duration-500 hover:scale-105 opacity-70 hover:opacity-100"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-10 sm:h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              ) : (
                <span className="text-gray-500 text-sm font-medium">
                  {p.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="mt-14 text-sm text-gray-500 uppercase tracking-widest">
          PARTNERING WITH EXCELLENCE WORLDWIDE
        </div>
      </div>

      {/* Divider Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-200/60"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200/60"></div>
    </section>
  );
}