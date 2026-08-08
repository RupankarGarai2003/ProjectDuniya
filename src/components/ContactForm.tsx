const ContactForm = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
      <form action="https://formspree.io/f/meoarbod" method="POST" className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-slate-700 block mb-1">
            What service may we assist you with? *
          </label>
          <select
            name="service"
            required
            className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option value="">Select a Service</option>
            <option>Final Year Academic Project</option>
            <option>Website / Software Development</option>
            <option>Data / AI Project</option>
            <option>Research / Thesis Writing</option>
            <option>Presentation / Viva Support</option>
            <option>Others</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 block mb-1">Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 block mb-1">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter phone number"
              className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 block mb-1">Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700 block mb-1">Due Date (Timeline) *</label>
            <input
              type="date"
              name="due_date"
              required
              className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 block mb-1">
            Mention your Requirements / Guidelines *
          </label>
          <textarea
            name="requirements"
            required
            rows={4}
            placeholder="Describe your project requirements..."
            className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl"
        >
          🚀 Submit Enquiry
        </button>

        <p className="text-xs text-center text-slate-500 mt-3">
          🔒 Your details are 100% confidential. No spam. No sharing.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
