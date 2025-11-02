
import { CheckCircle2, XCircle } from "lucide-react";

const features = [
  {
    feature: "Premium Demand (AdX, Open Bidding, Header Bidding)",
    others: true,
    bardnative: true,
  },
  { feature: "Viewability Optimization", others: true, bardnative: true },
  { feature: "High-Impact Ads (Sticky, Video, Native)", others: true, bardnative: true },
  { feature: "Automated Price Floor Optimization", others: false, bardnative: true },
  { feature: "Smart Ad Refresh", others: false, bardnative: true },
  { feature: "Fast-Track Approval", others: false, bardnative: true },
  { feature: "Free IVT Protection", others: false, bardnative: true },
  { feature: "Smart Ad formats", others: false, bardnative: true },
  { feature: "Aggregated Payments", others: true, bardnative: true },
  { feature: "Dedicated Account Manager", others: false, bardnative: true },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-[#1E3A8A]">BardNatived?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Compare our cutting-edge ad monetization technology with the rest — BardNative helps publishers earn more,
            stay transparent, and grow faster.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
          <table className="w-full border-collapse text-left text-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-lg font-semibold text-gray-700">Features</th>
                <th className="p-4 text-center font-semibold text-gray-700">Others</th>
                <th className="p-4 text-center font-semibold text-indigo-600">BardNative</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-all`}
                >
                  <td className="p-4 font-medium text-gray-800">{row.feature}</td>

                  {/* Others */}
                  <td className="p-4 text-center">
                    {row.others ? (
                      <CheckCircle2 className="w-6 h-6 mx-auto text-gray-400" />
                    ) : (
                      <XCircle className="w-6 h-6 mx-auto text-red-400" />
                    )}
                  </td>

                  {/* BardNative */}
                  <td className="p-4 text-center">
                    {row.bardnative ? (
                      <CheckCircle2 className="w-6 h-6 mx-auto text-indigo-500" />
                    ) : (
                      <XCircle className="w-6 h-6 mx-auto text-gray-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
