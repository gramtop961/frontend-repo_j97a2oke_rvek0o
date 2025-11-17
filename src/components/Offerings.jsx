export default function Offerings() {
  const items = [
    {
      title: 'Scrum Alliance Certifications',
      description: 'Earn globally recognized certifications like CSM, A-CSM, and CSPO. Live, interactive courses led by experienced trainers.',
      bullets: ['Certified ScrumMaster (CSM)', 'Advanced CSM (A-CSM)', 'Certified Scrum Product Owner (CSPO)'],
    },
    {
      title: 'PMP & Project Management',
      description: 'Get exam-ready with practical training for PMP and Agile certifications. Learn frameworks, practice exams, and real-world application.',
      bullets: ['PMP Exam Prep', 'PMI-ACP', 'Foundations & Bootcamps'],
    },
    {
      title: 'Coaching & Private Workshops',
      description: 'Accelerate adoption with hands-on coaching. Onsite and remote options for teams and leaders.',
      bullets: ['Team Coaching', 'Leadership Coaching', 'Custom Workshops'],
    },
  ]

  return (
    <section id="offerings" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Training & Coaching Offerings</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Flexible schedules, online and in-person. Small class sizes, proven outcomes.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
