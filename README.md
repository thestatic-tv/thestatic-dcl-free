# TheStatic.tv DCL SDK - FREE Tier Example

FREE tier example showing visitor tracking and session metrics with [@thestatic-tv/dcl-sdk](https://www.npmjs.com/package/@thestatic-tv/dcl-sdk).

## What This Example Shows

- **Session Status** - Real-time connection indicator (ACTIVE/OFFLINE)
- **SDK Mode** - Shows FREE or STANDARD based on your key
- **Session Timer** - Tracks time spent in scene
- **In-Scene Display** - Metrics board updates live

This is the FREE tier - just tracking, no video or UI features.

## Quick Start

```bash
npm install
npm start
```

The scene works immediately for testing - no setup required!

## Use Your Own Key

1. Get a key at [thestatic.tv/dashboard](https://thestatic.tv/dashboard)
2. Open `src/index.ts` and replace `dcls_YOUR_KEY_HERE` with your key
3. Delete `DELETE_THIS_DEMO.ts` (it's just for the demo scene)

## SDK Tiers

| Tier | Price | Features |
|------|-------|----------|
| **FREE** | $0 | Session tracking, visitor counts - THIS TEMPLATE |
| **STANDARD** | $10/mo | + Video screen, Guide UI, Chat |
| **PRO** | $15/mo | + In-Scene Admin Panel for video/mod controls |

## How It Works

That's literally it - 5 lines of code:

```typescript
import { StaticTVClient } from '@thestatic-tv/dcl-sdk'

export function main() {
  const staticTV = new StaticTVClient({
    apiKey: 'dcls_YOUR_KEY_HERE'
  })
}
```

## Project Structure

```
thestatic-dcl-free/
├── src/
│   ├── index.ts              # Your scene entry point (THIS IS ALL YOU NEED)
│   └── DELETE_THIS_DEMO.ts   # Demo visuals - DELETE when using your own key
├── scene.json                # Scene metadata
└── package.json              # Dependencies
```

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Run locally in preview mode |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to Decentraland |
| `npm run deploy:test` | Deploy to test world server |

## Want More Features?

Check out these other templates:

| Template | Tier | Features |
|----------|------|----------|
| **[Standard](https://github.com/thestatic-tv/thestatic-dcl-standard)** | STANDARD | Video screen, Guide UI, Chat |
| **[Pro](https://github.com/thestatic-tv/thestatic-dcl-pro)** | PRO | Full showcase with Admin Panel |

## Resources

- [Get API Key](https://thestatic.tv/dashboard)
- [SDK on npm](https://www.npmjs.com/package/@thestatic-tv/dcl-sdk)
- [TheStatic.tv](https://thestatic.tv)
