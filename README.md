
<!-- "prepare": "husky install", -->

## Develop

```shell
nvm use
npm install
cp .env.develop .env
npm run dev
npm run fix
npm run lint:ts
npm run lint:scss
```

## Build

```shell
rm .env
npm run build:prod
```

## Production

```shell
nvm use
npm install --production
```

Setup env vars (for sample via `.env`):

```dotenv
APP_ENV=prod
APP_RELEASE=releaseName
API_URL=API_URL
GOOGLE_ANALYTICS=ID
NETWORK=devnet
SENTRY_DSN=DSN
```

```shell
source .env
npm start
```
