import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />

      <nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-content-center font-bold">TL</div>
          <span className="text-xl font-semibold text-gray-800">ThinkLouder</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#offerings" className="hover:text-indigo-700">Training</a>
          <a href="#offerings" className="hover:text-indigo-700">Coaching</a>
          <a href="#certifications" className="hover:text-indigo-700">Certifications</a>
          <a href="#contact" className="hover:text-indigo-700">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-2 md:pt-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build high‑performing agile teams
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            ThinkLouder provides practical training and hands‑on coaching for teams and individuals. From Scrum Alliance certifications to PMP and leadership tracks, we help you deliver value faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#offerings" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">
              Explore Training
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-indigo-700 ring-1 ring-indigo-200 hover:ring-indigo-300">
              Talk to a Coach
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">10k+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Professionals trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">350+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Years experience</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-white/60 backdrop-blur border border-indigo-100 shadow-xl p-6 grid place-content-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Scrum Alliance', subtitle: 'CSM, A-CSM, CSPO' },
                { title: 'Project Management', subtitle: 'PMP, ACP' },
                { title: 'Leadership', subtitle: 'Agile Leadership' },
                { title: 'Team Coaching', subtitle: 'Workshops & Onsite' },
              ].map((c, i) => (
                <div key={i} className="rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/50 p-4">
                  <div className="text-sm font-semibold text-indigo-700">{c.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{c.subtitle}</div>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-tr from-indigo-100/60 to-sky-100/40" />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
