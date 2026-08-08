import React from "react";

// Very small markdown-lite renderer: supports **bold** inline and "- " bullet paragraphs.
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-navy font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function BlogContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-content space-y-5">
      {paragraphs.map((p, i) => {
        if (p.startsWith("- ")) {
          return (
            <li key={i} className="text-muted-foreground leading-relaxed ml-5 list-disc">
              {renderInline(p.slice(2))}
            </li>
          );
        }
        return (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {renderInline(p)}
          </p>
        );
      })}
    </div>
  );
}
