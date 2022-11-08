# Accounts: Cookie and Rock

`accounts.candr` is a micro service that handles all account authentication and support.

## Features

- Account management page.
- Middleware for allowing other microservices to have account authentication.
- Multiple authentication methods.
  - Email and password
  - Discord
- Email authentication

## Implementation

Inspired by Google's "Sign In" page.

This service should expose backend api allowing other micro services to authenticate a user.

Backend Auth Api:
- Query if a user is authenticated via a valid session; valid sessions return userIds.
- Exposed for different authentication methods including using a Discord bot for challenges.
- All account management features
  - Delete account and all it's data
  - Return all account data via email
  - 2FA

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Using Docker:

- Following [this guide](https://github.com/vercel/next.js/tree/canary/examples/with-docker#in-existing-projects) to add Dockerfile.
- Then build with `docker build -t account-candr .`
- Then run with `docker run -p 3000:3000 account-candr`

**IMPORTANT**

The Docker implementation uses a NextJs feature called `standalone` found in `next.config.js`. `standalone` allows for a small and only essential packages to be loaded and servable via `node server.js`. Unfortunately, it seems that `standalone` doesn't account for pages in the new NextJS `/app` directory. So all pages in the old `/pages` work but no pages in the `/app` work after deployment.

Test this yourself. Using `npm run build` and `npn run start` can use both `/pages` and `/app` but using `docker build...` and `docker run...` all `/app` pages are 404.

To fix this I added a line in the Dockerfile:

    COPY --from=builder --chown=nextjs:nodejs /app/.next/server ./.next/server

This makes sure that the `/server` dir, which I believe contains the new `/app` pages to be served as well. This solution is only a hack since it likely isn't using the optimized `standalone` feature which builds a minimal and essentials-only build. Since NextJS13 is relatively new, I couldn't find any good support or solutions to this problem.

I believe this solution is better than serving a whole `.next` dir but I'll see how far the millage takes me.

## Production

This should be run in a docker environment alongside other microservices.

Run with `docker run -p 3000:3000 account-candr`