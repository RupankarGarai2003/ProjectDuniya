/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()",
  },
  // A Content-Security-Policy is intentionally NOT set yet: it must be designed after
  // auditing Google Analytics + Formspree + inline JSON-LD (see README "Security").
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // City/state sub-pages were thin duplicates canonicalised to the country page.
      // They are consolidated into the country page with a permanent redirect.
      { source: "/locations/:country/:place", destination: "/locations/:country", permanent: true },
    ];
  },
};

export default nextConfig;
