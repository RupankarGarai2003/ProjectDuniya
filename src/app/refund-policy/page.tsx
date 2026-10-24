import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description: "How cancellations, revisions and refunds work for ProjectDuniya services.",
  path: "/refund-policy",
});

export default function RefundPage() {
  return (
    <LegalPage
      crumb="Refund & Cancellation"
      title="Refund & Cancellation Policy"
      intro="Clear expectations on cancellations, revisions and refunds."
      updated="7 October 2026"
      sections={[
        {
          heading: "Agreed in your quote",
          body: [
            "Because every project is scoped individually, the price, payment schedule, milestones and any advance payment are confirmed in your written quote before work starts. The quote is the reference for any cancellation or refund discussion.",
          ],
        },
        {
          heading: "Cancelling before work starts",
          body: ["If you cancel before we begin work, tell us as soon as possible. Any advance paid for work that has not started will be refunded, less any non-recoverable payment-processing charges."],
        },
        {
          heading: "Cancelling after work has started",
          body: [
            "If you cancel once work is under way, we will review the effort already completed against the milestones in your quote and refund any amount that relates to work not yet carried out. Completed and delivered milestones are not refundable.",
          ],
        },
        {
          heading: "Revisions",
          body: [
            "If a delivery does not match the requirements in your quote, tell us in writing with specifics. We will correct it within the revision allowance stated in your quote. Requests that change the original scope may be quoted separately.",
          ],
        },
        {
          heading: "When a refund may be offered",
          body: [
            "- We are unable to deliver the agreed scope.",
            "- A delivered item materially differs from the agreed requirements and we cannot correct it through the agreed revisions.",
            "Refunds are assessed case by case. We do not offer refunds based on a grade, an evaluator's opinion or a similarity-check percentage, as these depend on factors outside our control.",
          ],
        },
        {
          heading: "How refunds are paid",
          body: ["Approved refunds are returned to the original payment method or by another method we agree with you, normally within a reasonable processing period that depends on your bank or payment provider."],
        },
        {
          heading: "How to ask",
          body: [`Contact us on WhatsApp (${siteConfig.phoneDisplay}) or at ${siteConfig.email} with your name, the service ordered and what went wrong. We aim to respond promptly.`],
        },
      ]}
    />
  );
}
