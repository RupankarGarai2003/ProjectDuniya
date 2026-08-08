import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials",
  description:
    "Read what students from around the world say about ProjectDuniya's final year project help, coding support, and academic guidance.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHeader
        title="What Students Say About ProjectDuniya"
        description="Real feedback from students we've helped across final year projects, coding, data analysis, and thesis writing."
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-20 bg-light-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-navy">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} className={`w-4 h-4 ${star < Math.floor(t.rating) ? "fill-yellow-500 text-yellow-500" : "fill-yellow-500/30 text-yellow-500"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic">&ldquo;{t.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
