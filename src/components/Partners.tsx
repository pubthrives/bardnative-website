const partners = [
  {
    name: "NOBETA",
    logo: "https://nobeta.com.br/images/logo-nobeta-100x32.png",
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
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-100 relative overflow-hidden"
    >
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"
      ></div>

      {/* Glowing Accent Circle */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#1E3A8A]/10 blur-3xl rounded-full opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Trusted{" "}
          <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
            Partners
          </span>
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Collaborating with industry leaders to deliver high-performance,
          transparent, and scalable monetization for every publisher.
        </p>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-items-center">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-500 opacity-80 hover:opacity-100"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-sm"
                />
              ) : (
                <span className="text-gray-500 text-sm">{p.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Glow Line */}
        <div className="mt-20 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#1E3A8A]/50 to-transparent"></div>
      </div>
    </section>
  );
}