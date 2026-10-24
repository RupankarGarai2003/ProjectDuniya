import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms that apply when you use the ProjectDuniya website and request project guidance, development or writing support.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      crumb="Terms of Service"
      title="Terms of Service"
      intro="Please read these terms before using our website or requesting a service."
      updated="7 October 2026"
      sections={[
        {
          heading: "About these terms",
          body: [
            `These terms apply to your use of this website and to services provided by ${siteConfig.name} ("we", "us"). By submitting an enquiry or using our services you agree to them. If you do not agree, please do not use the services.`,
          ],
        },
        {
          heading: "What we provide",
          body: [
            "We provide online academic and technical project support, such as planning and mentoring, software and data-project development, debugging, documentation, presentation and viva preparation, and writing and formatting support. The exact scope, deliverables, timeline and price for each request are set out in a written quote (WhatsApp, email or similar) that you accept before work starts.",
          ],
        },
        {
          heading: "Your responsibilities",
          body: [
            "- Give us accurate requirements, guidelines and deadlines, and tell us promptly if they change.",
            "- Use our work in line with your institution's rules. Please read our Academic Integrity Policy.",
            "- Only share material you have the right to share.",
            "- Respond to questions and review drafts in time for the agreed schedule.",
          ],
        },
        {
          heading: "No guarantee of grades or outcomes",
          body: [
            "Grades, evaluations, admissions and job outcomes depend on factors outside our control, including your institution's marking. We do not guarantee any particular grade, result or similarity-check score.",
          ],
        },
        {
          heading: "Quotes, payment and delivery",
          body: [
            "Prices, payment methods and timelines are confirmed in your quote. Work normally starts once the quote is accepted and any agreed advance is paid. Delivery dates depend on you providing the information and feedback we need. Cancellations and refunds are covered in our Refund & Cancellation Policy.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Unless we agree otherwise in writing, you may use the deliverables for your own learning and coursework. We keep ownership of our pre-existing tools, templates and know-how. Third-party libraries, datasets and assets remain subject to their own licences, which we will point out where relevant.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "We treat your personal details and project materials as confidential and use them only to deliver your service, except where disclosure is required by law or needed to run the tools described in our Privacy Policy.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You must not use the website to send unlawful, abusive or misleading content, attempt to disrupt or gain unauthorised access to the site, or request work that breaches the law or an exam or assessment rule that prohibits outside help.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the maximum extent permitted by law, we are not liable for indirect or consequential losses, and our total liability for any claim relating to a service is limited to the amount you paid us for that service. Nothing in these terms limits liability that cannot be limited by law.",
          ],
        },
        {
          heading: "Third-party links and services",
          body: ["The website links to third-party platforms such as WhatsApp, Instagram, Telegram and Facebook. We are not responsible for their content or practices."],
        },
        {
          heading: "Governing law",
          body: ["These terms are governed by the laws of India, and the courts at Kolkata, West Bengal have jurisdiction, subject to any mandatory consumer rights that apply to you where you live."],
        },
        {
          heading: "Changes and contact",
          body: [`We may update these terms from time to time; the date above shows the latest version. Questions? Email ${siteConfig.email}.`],
        },
      ]}
    />
  );
}
