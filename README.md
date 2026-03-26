# openclaw-edith-glasses

OpenClaw channel plugin for **Edith** — a voice AI assistant for smart glasses.

Talk to your OpenClaw agent hands-free through your glasses. Say "Hey Edith" and your full agent — with tools, memory, and integrations — responds via the glasses speakers.

## Quick setup

Install the skill and let OpenClaw handle everything:

```bash
npx clawhub install edith
```

Then tell OpenClaw your link code (shown in the Edith app on your glasses):

> Set up my Edith glasses. My link code is XXXXXXXX

## Manual setup

```bash
openclaw plugins install openclaw-edith-glasses
openclaw channels add --channel edith-glasses --token YOUR_LINK_CODE
openclaw gateway restart
```

## How it works

```
Glasses → Edith App (cloud) → WebSocket → This Plugin (your machine) → OpenClaw Agent → Response → Glasses
```

The plugin connects **outbound** to the Edith app via WebSocket — no port forwarding or tunnels needed. It works exactly like the Discord and Telegram plugins.

## Features

- Voice conversations with your OpenClaw agent
- Camera/vision queries ("What am I looking at?")
- Wake word activation ("Hey Edith" / "Ok Edith")
- Interrupt with "Stop" or a side tap
- Follow-up conversations without repeating the wake word
- Automatic reconnection with exponential backoff

## Configuration

After setup, your `openclaw.json` will contain:

```json
{
  "channels": {
    "edith-glasses": {
      "enabled": true,
      "appUrl": "https://edith-production-a63c.up.railway.app",
      "linkCode": "YOUR_LINK_CODE"
    }
  }
}
```

The `appUrl` defaults to the hosted Edith app. The `linkCode` is unique to your glasses session — get it from the Edith app settings page.

## License

MIT
