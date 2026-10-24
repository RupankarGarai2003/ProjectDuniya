import PageHeader from "@/components/PageHeader";

export interface LegalSection {
  heading: string;
  body: string[]; // paragraphs; entries starting with "- " become list items
}

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
  crumb,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  crumb: string;
}) {
  return (
    <main>
      <PageHeader title={title} description={intro} crumbs={[{ label: crumb }]} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-10">Last updated: {updated}</p>
          <div className="space-y-10">
            {sections.map((s) => {
              const items = s.body.filter((b) => b.startsWith("- "));
              const paras = s.body.filter((b) => !b.startsWith("- "));
              return (
                <section key={s.heading}>
                  <h2 className="text-xl font-bold text-navy mb-3">{s.heading}</h2>
                  {paras.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                  {items.length > 0 && (
                    <ul className="list-disc ml-6 space-y-2 text-muted-foreground leading-relaxed">
                      {items.map((it, i) => (
                        <li key={i}>{it.slice(2)}</li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
