'use client'

const members = [
  { id: 1, role: "Chairperson", designation: "Commissioner, Nashik Division", type: "Chairperson" },
  { id: 2, role: "Vice-Chairperson", designation: "Collector, Nashik District", type: "Vice-Chairperson" },
  { id: 3, role: "Vice-Chairperson", designation: "Special Inspector General of Police, Nashik Range", type: "Vice-Chairperson" },
  { id: 4, role: "Ex-officio Member", designation: "Collector, Ahilyanagar District", type: "Ex-officio" },
  { id: 5, role: "Ex-officio Member", designation: "Metropolitan Commissioner, Nashik Metropolitan Region Development Authority", type: "Ex-officio" },
  { id: 6, role: "Ex-officio Member", designation: "Commissioner of Police, Nashik City", type: "Ex-officio" },
  { id: 7, role: "Ex-officio Member", designation: "Superintendent of Police, Nashik Rural", type: "Ex-officio" },
  { id: 8, role: "Ex-officio Member", designation: "Municipal Commissioner, Municipal Corporation of Nashik", type: "Ex-officio" },
  { id: 9, role: "Ex-officio Member", designation: "Chief Executive Officer, Zilla Parishad, Nashik", type: "Ex-officio" },
  { id: 10, role: "Ex-officio Member", designation: "Chief Officer, Trimbakeshwar Municipal Council", type: "Ex-officio" },
  { id: 11, role: "Ex-officio Member", designation: "Deputy Commissioner (Planning), Nashik", type: "Ex-officio" },
  { id: 12, role: "Ex-officio Member", designation: "Divisional Controller, Maharashtra State Road Transport Corporation (MSRTC), Nashik", type: "Ex-officio" },
  { id: 13, role: "Ex-officio Member", designation: "Deputy Director of Health, Nashik", type: "Ex-officio" },
  { id: 14, role: "Ex-officio Member", designation: "Superintending Engineer, Water Resources Department (Godavari River & water management), Nashik", type: "Ex-officio" },
  { id: 15, role: "Ex-officio Member", designation: "Chief Engineer, Public Works Department, Nashik", type: "Ex-officio" },
  { id: 16, role: "Ex-officio Member", designation: "Chief Engineer, Maharashtra Jeevan Pradhikaran, Nashik", type: "Ex-officio" },
  { id: 17, role: "Ex-officio Member", designation: "Superintending Engineer, Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL), Nashik", type: "Ex-officio" },
  { id: 18, role: "Ex-officio Member", designation: "Regional Officer, Maharashtra Pollution Control Board (MPCB), Nashik", type: "Ex-officio" },
  { id: 19, role: "Ex-officio Member", designation: "Joint Director, Accounts and Treasuries, Nashik", type: "Ex-officio" },
  { id: 20, role: "Ex-officio Member", designation: "Joint Director, Town Planning, Nashik Division", type: "Ex-officio" },
  { id: 21, role: "Ex-officio Member", designation: "Representative nominated by the Railway Board", type: "Ex-officio" },
  { id: 22, role: "Member–Secretary", designation: "Kumbh Mela Commissioner", type: "Secretary" }
]

const getRoleColor = (type: string) => {
  switch(type) {
    case "Chairperson":
      return "bg-orange-100 text-orange-700 border-orange-200"
    case "Vice-Chairperson":
      return "bg-amber-100 text-amber-700 border-amber-200"
    case "Secretary":
      return "bg-blue-100 text-blue-700 border-blue-200"
    default:
      return "bg-stone-100 text-stone-700 border-stone-200"
  }
}

export default function AuthoritiesSection() {
  return (
    <section className="bg-cover bg-center bg-fixed py-16 md:py-24 relative" style={{ backgroundImage: "url('/bg_about.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 md:bg-white/65"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-stone-900 mb-3">
            NTKMA Members
          </h1>
          <p className="text-lg text-stone-600">
            Members of the Nashik–Trimbakeshwar Kumbh Mela Authority
          </p>
        </div>

        {/* Members List */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <th className="px-4 py-4 text-left text-sm font-black w-12">#</th>
                    <th className="px-4 py-4 text-left text-sm font-black">Role / Designation</th>
                    <th className="px-4 py-4 text-left text-sm font-black">Department / Position</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => (
                    <tr key={member.id} className={index % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="px-4 py-4 text-sm font-bold text-stone-900">{member.id}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getRoleColor(member.type)}`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-stone-700">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tablet and Mobile Card View */}
          <div className="lg:hidden space-y-0 divide-y divide-stone-200 bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm">
            {members.map((member, index) => (
              <div key={member.id} className="p-4 hover:bg-stone-50 transition-colors">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex-shrink-0">
                      {member.id}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getRoleColor(member.type)}`}>
                        {member.role}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 leading-snug break-words">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg border-2 border-orange-200 p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-orange-600 mb-2">1</p>
            <p className="text-xs sm:text-sm font-semibold text-stone-900">Chairperson</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-amber-600 mb-2">2</p>
            <p className="text-xs sm:text-sm font-semibold text-stone-900">Vice-Chairpersons</p>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-blue-600 mb-2">19</p>
            <p className="text-xs sm:text-sm font-semibold text-stone-900">Ex-officio Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
