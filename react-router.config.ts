import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return ["/"];

  }
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
} satisfies Config;
