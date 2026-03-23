# @openclaw/edith-glasses

OpenClaw channel plugin for **Edith** — an AI assistant for smart glasses.

This plugin connects your smart glasses to your local OpenClaw instance. The plugin connects **outbound** via WebSocket to the Edith app (hosted on Render), so you don't need to expose any ports or set up tunnels.

## Install

```bash
openclaw plugins install @openclaw/edith-glasses
```

Or from source:

```bash
git clone https://github.com/SamDickworthy/openclaw-edith-glasses.git
openclaw plugins install ./openclaw-edith-glasses
```

## Configure

Add to your `openclaw.json`:

```json
{
  "channels": {
    "edith-glasses": {
      "enabled": true,
      "appUrl": "https://your-edith-app.onrender.com",
      "linkCode": "YOUR_LINK_CODE"
    }
  }
}
```

Get your **Link Code** from the Edith app settings page on your glasses.

## How it works

```
Glasses → Edith App (cloud) → WebSocket → This Plugin (your machine) → OpenClaw Agent → Response → WebSocket → App → TTS → Glasses
```

1. You speak through your smart glasses
2. The Edith app transcribes your speech
3. This plugin receives the text over WebSocket
4. OpenClaw processes it through your configured agent (with full tool access, memory, etc.)
5. The response is sent back and spoken through your glasses

No port forwarding. No tunnels. The plugin initiates the connection outward, just like Discord and Telegram bots do.
