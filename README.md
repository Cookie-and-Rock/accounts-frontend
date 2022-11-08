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

## Production

This should be run in a docker environment alongside other microservices.

Run with `docker run -p 3000:3000 account-candr`