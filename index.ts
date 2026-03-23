import type { OpenClawPluginApi } from "openclaw/plugin-sdk";
import { emptyPluginConfigSchema } from "openclaw/plugin-sdk";
import { edithGlassesPlugin } from "./src/channel.js";
import { setEdithGlassesRuntime } from "./src/runtime.js";

const PLUGIN_ID = "openclaw-edith-glasses";

const plugin = {
  id: PLUGIN_ID,
  name: "Edith Glasses",
  description: "Edith smart glasses channel plugin",
  configSchema: emptyPluginConfigSchema(),
  register(api: OpenClawPluginApi) {
    setEdithGlassesRuntime(api.runtime);
    api.registerChannel({ plugin: edithGlassesPlugin });

    // Auto-add default channel config if not present
    try {
      const cfg = api.runtime.config.loadConfig() as Record<string, unknown>;
      const channels = (cfg.channels ?? {}) as Record<string, unknown>;
      if (!channels[CHANNEL_ID]) {
        const updated = {
          ...cfg,
          channels: {
            ...channels,
            [CHANNEL_ID]: {
              enabled: true,
              appUrl: "PASTE_YOUR_APP_URL",
              linkCode: "PASTE_YOUR_LINK_CODE",
            },
          },
        };
        api.runtime.config.writeConfigFile(updated as any).catch(() => {
          // Silently ignore write errors (e.g. read-only config)
        });
      }
    } catch {
      // Config read failed -- skip auto-setup
    }
  },
};

export default plugin;
