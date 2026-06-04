/// <reference types="vite/client" />
import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MobileCTA } from "../components/layout/MobileCTA";
import { WebSchema } from "../components/seo/WebSchema";
import { SITE } from "../lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0B2545" },
      { name: "color-scheme", content: "light" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "description", content: SITE.description },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_NG" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: SITE.tagline },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
      { property: "og:image", content: `${SITE.url}${SITE.ogImage}` },
      { property: "og:image:secure_url", content: `${SITE.url}${SITE.ogImage}` },
      { property: "og:image:width", content: String(SITE.ogImageWidth) },
      { property: "og:image:height", content: String(SITE.ogImageHeight) },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: SITE.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.tagline },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: `${SITE.url}${SITE.ogImage}` },
      { name: "twitter:image:alt", content: SITE.ogImageAlt },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  errorComponent: () => (
    <RootDocument>
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-primary">500 — Internal Server Error</h1>
        <p className="mt-4 text-muted">
          Something went wrong on our end. Please try again, or contact us if the
          problem persists.
        </p>
        <Link to="/" className="mt-6 inline-block text-accent-600 underline">
          Return to home
        </Link>
      </main>
    </RootDocument>
  ),
  notFoundComponent: () => (
    <RootDocument>
      <main className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-primary">404 — Page Not Found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for could not be found. Use the menu above to
          find what you need.
        </p>
        <Link to="/" className="mt-6 inline-block text-accent-600 underline">
          Return to home
        </Link>
      </main>
    </RootDocument>
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <HeadContent />
        <WebSchema />
      </head>
      <body className="min-h-screen bg-surface text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <Scripts />
      </body>
    </html>
  );
}
