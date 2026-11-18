

## Blog hub, service catalog & project ideas

- `src/lib/blog-hub.ts` - connection to blogs.projectduniya.com (links, UTM tags, live latest posts with fallback).
- `src/components/BlogBridge.tsx` - reusable "read more on our blog" panel (used on services, service pages, project ideas, FAQ, locations, guides).
- `src/lib/data/service-catalog.ts` + `src/components/ServiceCatalog.tsx` - structured 46-service catalog on `/services` (OfferCatalog JSON-LD).
- `src/lib/data/project-ideas.ts` + `src/components/IdeasExplorer.tsx` - 120 searchable/filterable project ideas on `/project-ideas` (ItemList + FAQ JSON-LD).
