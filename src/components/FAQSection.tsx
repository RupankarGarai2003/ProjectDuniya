import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How does the project order placement process work?",
    answer:
      "You submit your project requirements via our form or social platforms. Our team reviews the details and contacts you for further discussion.",
  },
  {
    question: "I’m a beginner. Can I still get project help?",
    answer:
      "Yes. ProjectDuniya is beginner-friendly. We guide you step by step with explanations so you fully understand your project.",
  },
  {
    question: "Do you provide complete projects or only guidance?",
    answer:
      "We provide guided project support along with complete implementation and explanation to help you confidently present your work.",
  },
  {
    question: "What types of projects does ProjectDuniya support?",
    answer:
      "We support school projects, college & final-year projects, coding, web & software development, data analysis, AI/ML, research papers, and more.",
  },
  {
    question: "How can I make a payment? Is it secure?",
    answer:
      "Payments are accepted via secure online methods. All transactions are safe, transparent, and student-friendly.",
  },
  {
    question: "Is the work plagiarism-free and confidential?",
    answer:
      "Yes. All projects are 100% original, plagiarism-free, and your personal/project details remain completely confidential.",
  },
  {
    question: "What happens after I confirm the project?",
    answer:
      "Once confirmed, we assign an expert, start development, and share regular progress updates with you.",
  },
  {
    question: "Will I receive regular project updates?",
    answer:
      "Absolutely. We provide frequent updates via WhatsApp or call so you always know your project status.",
  },
  {
    question: "Can I request changes or modifications?",
    answer:
      "Yes. We encourage feedback and allow reasonable revisions so the project meets your expectations.",
  },
  {
    question: "Do you help with urgent or last-minute deadlines?",
    answer:
      "Yes. Depending on complexity, we support urgent deadlines. Contact us early for best results.",
  },
  {
    question: "How is the project delivered?",
    answer:
      "We deliver the complete project digitally along with documentation, explanation sessions, and support.",
  },
  {
    question: "Do you provide viva or presentation support?",
    answer:
      "Yes. We help with viva questions, PPTs, explanations, and mock sessions if required.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            FAQs
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            What Students Ask About ProjectDuniya
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clear answers to common questions about projects, pricing, delivery,
            and student support.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-blue-100 shadow-sm
                transition-all duration-300
                ${openIndex === index ? "shadow-lg border-blue-300" : ""}`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Number */}
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>

                  <span className="font-semibold text-navy">
                    {faq.question}
                  </span>
                </div>

                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 pt-0 animate-accordion-down">
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-2">
            Still confused?
          </p>
          <a
            href="https://wa.me/918391808784"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Chat with our experts on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
