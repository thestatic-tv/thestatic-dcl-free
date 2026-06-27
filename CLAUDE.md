# thestatic-dcl-free - AI Session Entry

## What this is

A **starter template** demonstrating the FREE tier of `@thestatic-tv/dcl-sdk`.
Users clone this to get a minimal Decentraland scene with visitor tracking only.

**This is not a production scene.** It's a reference implementation / clone-me template.
The equivalent deployed production scene is `thestatic-hq` (or `thestatic-popup` for showcase).

## What FREE tier provides

- Session status display (ACTIVE/OFFLINE)
- Session timer
- Visitor tracking / analytics
- No video, no guide, no chat

## Quick commands

```bash
npm install
npm start              # Local preview
npm run deploy         # Deploy to mainnet (after updating scene.json)
npm run deploy:test    # Test world
```

## Key file

`src/index.ts` - Initialize the SDK with a FREE tier key (`dcls_*` prefix):

```typescript
staticTV = new StaticTVClient({ apiKey: 'dcls_YOUR_KEY_HERE' })
```

Get a key at [thestatic.tv/dashboard](https://thestatic.tv/dashboard).

## SDK tiers (for context)

| Tier | Key prefix | Features |
|------|-----------|---------|
| **Free** | `dcls_*` | Visitor tracking only - **this template** |
| Standard | `dcls_*` | + Video screen, Guide UI, Chat |
| Pro | `dclk_*` | + Admin Panel |

See `thestatic-dcl-standard` and `thestatic-dcl-pro` for the other tiers.

## Cross-repo dependencies

- `thestatic-dcl-sdk` - publishes `@thestatic-tv/dcl-sdk` to npm
- `thestatic-tv` - backend API this scene talks to
