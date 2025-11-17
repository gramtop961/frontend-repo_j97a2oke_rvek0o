import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Talk to an expert</h2>
          <p className="mt-3 text-gray-600">Tell us what you need and we’ll tailor a plan for your team or career.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Full name</label>
            <input name="name" required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Email</label>
            <input name="email" type="email" required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="jane@company.com" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm font-medium">Company (optional)</label>
            <input name="company" className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Acme Inc." />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm font-medium">Area of interest</label>
            <select name="interest" className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200">
              <option>Scrum Alliance Certifications</option>
              <option>PMP / PMI-ACP</option>
              <option>Private Team Coaching</option>
              <option>Leadership Development</option>
              <option>Other</option>
            </select>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea name="message" required rows="5" className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Tell us about your goals, timelines, and challenges..." />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700">Send Message</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
