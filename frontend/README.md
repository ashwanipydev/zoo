# Zoo Frontend (Angular)

This frontend has been migrated from React to Angular with native CSS styling.

## Development

Install dependencies:

```bash
npm install
```

Run the frontend locally with backend proxy:

```bash
npm start
```

The app will run at `http://localhost:4200` and API requests to `/api` will proxy to `http://localhost:8081`.

## Build

```bash
npm run build
```

## Architecture

- Angular standalone components for page-level routing
- Core services under `src/app/core/services`
- Feature pages under `src/app/pages`
- Native CSS styling in `src/styles.css` and component styles
- Development proxy configured in `proxy.conf.json`
