export default function Certifications() {
  const certs = [
    { name: 'CSM', body: 'Certified ScrumMaster prepares you to facilitate agile teams and deliver value.' },
    { name: 'CSPO', body: 'Certified Scrum Product Owner teaches you to maximize product outcomes.' },
    { name: 'A-CSM', body: 'Advanced ScrumMaster deepens your facilitation and coaching skills.' },
    { name: 'PMP', body: 'Project Management Professional exam prep covering people, process, and business domains.' },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Popular Certifications</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Live courses with expert instructors, practical exercises, and exam guidance.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">Request Schedule</a>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-md bg-indigo-600/10 text-indigo-700 grid place-content-center font-bold">
                {c.name}
              </div>
              <p className="mt-4 text-sm text-gray-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
