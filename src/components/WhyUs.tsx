import { CheckCircle2, XCircle } from "lucide-react";

const features = [
  { feature: "Premium Demand (AdX, Open Bidding, Header Bidding)", others: true, bardnative: true },
  { feature: "Viewability Optimization", others: true, bardnative: true },
  { feature: "High-Impact Ads (Sticky, Video, Native)", others: true, bardnative: true },
  { feature: "Automated Price Floor Optimization", others: false, bardnative: true },
  { feature: "Smart Ad Refresh", others: false, bardnative: true },
  { feature: "Fast-Track Approval", others: false, bardnative: true },
  { feature: "Free IVT Protection", others: false, bardnative: true },
  { feature: "Smart Ad Formats", others: false, bardnative: true },
  { feature: "Aggregated Payments", others: true, bardnative: true },
  { feature: "Dedicated Account Manager", others: false, bardnative: true },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-28 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-[#0D1B4C]/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#142E6E]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
              BardNative
            </span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Compare BardNative’s advanced monetization suite with standard networks — discover how we help publishers
            achieve unmatched growth, transparency, and performance.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 bg-white backdrop-blur-md">
          <table className="w-full border-collapse text-left text-gray-800">
            <thead>
              <tr className="bg-[#F7F8FB] border-b border-gray-100">
                <th className="p-5 text-lg font-semibold text-gray-700">Features</th>
                <th className="p-5 text-center font-semibold text-gray-600">Others</th>
                <th className="p-5 text-center font-semibold text-[#0D1B4C]">BardNative</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-[#F0F4FF]/50 transition-all`}
                >
                  <td className="p-5 font-medium text-gray-800">{row.feature}</td>

                  {/* Others */}
                  <td className="p-5 text-center">
                    {row.others ? (
                      <CheckCircle2 className="w-6 h-6 mx-auto text-gray-400" />
                    ) : (
                      <XCircle className="w-6 h-6 mx-auto text-red-400" />
                    )}
                  </td>

                  {/* BardNative */}
                  <td className="p-5 text-center">
                    {row.bardnative ? (
                      <CheckCircle2 className="w-6 h-6 mx-auto text-[#0D1B4C]" />
                    ) : (
                      <XCircle className="w-6 h-6 mx-auto text-gray-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tagline */}
        <div className="text-center mt-10 text-sm text-gray-500 tracking-wider uppercase">
          Trusted by publishers worldwide for performance, reliability, and transparency.
        </div>
      </div>
    </section>
  );
}