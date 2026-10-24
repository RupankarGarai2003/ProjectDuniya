import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Academic Integrity & Student Use Policy",
  description: "How ProjectDuniya expects its guidance, code and written material to be used, and what we will not do.",
  path: "/academic-integrity",
});

export default function IntegrityPage() {
  return (
    <LegalPage
      crumb="Academic Integrity"
      title="Academic Integrity & Student Use Policy"
      intro="Our support is meant to help you learn, build and present your own work responsibly."
      updated="7 October 2026"
      sections={[
        {
          heading: "Our purpose",
          body: [
            "We help students plan, understand and present academic and technical projects: mentoring, example solutions, code reviews, documentation, formatting and viva preparation. Every engagement is built around you being able to explain the work.",
          ],
        },
        {
          heading: "Your responsibility",
          body: [
            "Institutions, departments and instructors set their own rules about what outside help is allowed. It is your responsibility to know those rules and to use our material only in ways they permit. Depending on your institution, that may mean using our work as a reference, learning aid or starting point, citing or disclosing help where required, and writing or adapting submissions yourself.",
            "In some countries it is also against the law to provide or advertise services that help students cheat. Make sure your use of any service complies with your local law and your institution's policy.",
          ],
        },
        {
          heading: "What we will not do",
          body: [
            "- Sit or take exams, quizzes or any proctored or supervised assessment for anyone.",
            "- Impersonate a student or use another person's login or identity.",
            "- Falsify data, results, references or credentials.",
            "- Help with requests that are clearly intended to break an assessment rule.",
            "We may decline or stop a request if we believe it would breach these principles.",
          ],
        },
        {
          heading: "Originality",
          body: [
            "We build each deliverable for the requirements you give us rather than reselling a template, and we can run a similarity check on written work. Similarity tools measure overlap with published sources; they do not guarantee how an institution will assess a submission.",
          ],
        },
        {
          heading: "Using our work responsibly",
          body: [
            "- Read, run and understand everything you submit so you can explain it in a viva or code review.",
            "- Acknowledge sources, libraries, datasets and any assistance in line with your institution's rules.",
            "- Ask your instructor if you are unsure what is allowed.",
          ],
        },
        {
          heading: "Questions",
          body: ["If you are unsure whether a type of help fits your institution's rules, ask us before you order and we will explain what we can offer within them."],
        },
      ]}
    />
  );
}
