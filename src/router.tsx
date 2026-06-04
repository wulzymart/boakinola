import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: () => (
      <div className="mx-auto max-w-2xl p-12 text-center">
        <h1 className="text-3xl font-bold text-primary">500 — Internal Server Error</h1>
        <p className="mt-4 text-muted">
          Something went wrong on our end. Please try again, or contact us if the problem persists.
        </p>
        <a href="/" className="mt-6 inline-block text-accent underline">
          Return to home
        </a>
      </div>
    ),
    defaultNotFoundComponent: () => (
      <div className="mx-auto max-w-2xl p-12 text-center">
        <h1 className="text-3xl font-bold text-primary">404 — Page Not Found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for could not be found. Use the menu above to find what you need.
        </p>
        <a href="/" className="mt-6 inline-block text-accent underline">
          Return to home
        </a>
      </div>
    ),
    scrollRestoration: true,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
