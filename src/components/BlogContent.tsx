import React from "react";
import Link from "next/link";

// Small markdown-lite renderer. Supported blocks (one per array entry):
//   "## Heading"  -> <h2>      "### Heading" -> <h3>
//   "- item"      -> grouped into <ul>
//   "1. item"     -> grouped into <ol>
//   anything else -> <p>
// Inline: **bold** and [text](/internal-or-https-link)
function renderInline(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-navy font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const cls = "text-primary font-medium underline underline-offset-2 hover:text-primary/80";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parse(paragraphs: string[]): Block[] {
  const blocks: Block[] = [];
  for (const raw of paragraphs) {
    if (raw.startsWith("### ")) blocks.push({ type: "h3", text: raw.slice(4) });
    else if (raw.startsWith("## ")) blocks.push({ type: "h2", text: raw.slice(3) });
    else if (raw.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(raw.slice(2));
      else blocks.push({ type: "ul", items: [raw.slice(2)] });
    } else if (/^\d+\.\s/.test(raw)) {
      const item = raw.replace(/^\d+\.\s/, "");
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ol") last.items.push(item);
      else blocks.push({ type: "ol", items: [item] });
    } else blocks.push({ type: "p", text: raw });
  }
  return blocks;
}

export default function BlogContent({ paragraphs }: { paragraphs: string[] }) {
  const blocks = parse(paragraphs);
  return (
    <div className="prose-content space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl font-bold text-navy pt-6">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-semibold text-navy pt-2">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc ml-6 space-y-2 text-muted-foreground leading-relaxed">
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal ml-6 space-y-2 text-muted-foreground leading-relaxed">
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it)}</li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {renderInline(b.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
