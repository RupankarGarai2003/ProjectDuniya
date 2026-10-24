import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How ProjectDuniya collects, uses and protects personal information, including enquiry-form data, Google Analytics and third-party tools.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      crumb="Privacy Policy"
      title="Privacy Policy"
      intro="What we collect, why we collect it, who we share it with, and the choices you have."
      updated="7 October 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            `${siteConfig.name} is an online academic and technical project guidance service based in ${siteConfig.address}. You can reach us at ${siteConfig.email} or on WhatsApp at ${siteConfig.phoneDisplay} for any privacy question.`,
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "- Enquiry form data: your name, phone number, email address, preferred service, due date, the requirements you type, and the page you submitted from.",
            "- Messages you send us by WhatsApp, phone, email, Instagram, Telegram or Facebook, and any files you choose to share while we work on your request.",
            "- Website usage data collected by Google Analytics 4: pages viewed, approximate location derived from IP address, device and browser type, referring page, and clicks on contact links (WhatsApp, phone, email) and key buttons.",
            "We do not ask for payment card details on this website.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "- To respond to your enquiry, prepare a quote and deliver the service you request.",
            "- To communicate progress updates and support you through delivery.",
            "- To understand which pages and articles are useful and to improve the website.",
            "- To keep the website secure and prevent spam or abuse.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Third-party tools that process data",
          body: [
            "- Formspree (formspree.io) receives and forwards enquiry-form submissions to us by email.",
            "- Google Analytics 4 (Google LLC) processes website usage data and sets cookies or similar identifiers in your browser.",
            "- WhatsApp, Instagram, Telegram and Facebook process messages you send through their platforms under their own privacy policies.",
            "- Our hosting provider serves the website and may process technical logs such as IP address and request details.",
            "These providers may process data in countries other than your own, including the United States.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "Google Analytics uses cookies to distinguish visitors and sessions. You can block or delete cookies in your browser settings, or install Google's browser add-on to opt out of Google Analytics. If you are in a region that requires consent for analytics cookies, please block them in your browser or contact us and we will respect your choice.",
          ],
        },
        {
          heading: "Legal bases (where applicable)",
          body: [
            "If the GDPR, UK GDPR or similar laws apply to you, we rely on: taking steps at your request before providing a service (responding to your enquiry), our legitimate interests in operating and securing the website and understanding how it is used, and consent where we ask for it.",
          ],
        },
        {
          heading: "How long we keep information",
          body: [
            "We keep enquiry and project communications for as long as needed to respond, deliver and support your request, and to keep reasonable business records. You may ask us to delete your information earlier and we will do so unless we are required to keep it. Analytics data is retained according to the retention settings configured in our Google Analytics account.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on where you live (for example under the GDPR, UK GDPR or India's Digital Personal Data Protection Act, 2023), you may have the right to access, correct or delete your personal information, to object to or restrict certain processing, to withdraw consent, and to complain to your local data-protection authority. To exercise these rights, email us at " + siteConfig.email + ".",
          ],
        },
        {
          heading: "Security",
          body: [
            "We use HTTPS and limit access to enquiry and project information to the people who need it. No internet service can be completely secure, so please avoid sending sensitive personal data (such as government ID numbers) unless it is essential to your project.",
          ],
        },
        {
          heading: "Children",
          body: ["This website is intended for students aged 16 and over and for adults. If you believe a child has sent us personal information, contact us and we will delete it."],
        },
        {
          heading: "Changes to this policy",
          body: ["We may update this policy from time to time. The date at the top shows when it was last revised."],
        },
      ]}
    />
  );
}
