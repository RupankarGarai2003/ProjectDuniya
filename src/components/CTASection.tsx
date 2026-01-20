import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="form" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT (unchanged) */}
          <div className="text-white max-w-xl animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug mb-5">
              Need a{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Custom
              </span>{" "}
              Project?
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-4 max-w-md">
              Share your project requirements and get expert guidance tailored
              to your academic or technical needs.
            </p>

            <p className="text-sm text-emerald-200 font-medium mb-6">
              ✔ 100+ Projects Completed • ✔ 100% Confidential • ✔ Expert Mentorship
            </p>

            <Button
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur rounded-full px-8 py-5 font-semibold transition-all hover:scale-105"
              onClick={() =>
                window.open("https://wa.me/918391808784", "_blank")
              }
            >
              💬 Chat on WhatsApp
            </Button>
          </div>

          {/* RIGHT FORM (COLOR STYLE UPDATED) */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.25)] animate-fade-in-up">
            <form
              action="https://formspree.io/f/meoarbod"
              method="POST"
              className="space-y-4"
            >
              {/* Service */}
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

              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 block mb-1">
                    Due Date (Timeline) *
                  </label>
                  <input
                    type="date"
                    name="due_date"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm bg-white border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Requirements */}
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

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-xl py-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl"
              >
                🚀 Submit Enquiry
              </Button>

              <p className="text-xs text-center text-slate-500 mt-3">
                🔒 Your details are 100% confidential. No spam. No sharing.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
