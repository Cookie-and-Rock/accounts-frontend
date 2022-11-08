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
## Production

This should be run in a docker environment alongside other microservices.