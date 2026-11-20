import { createApp } from "./app";
import { config } from "./core/config";

const app = createApp();

app.listen(config.port, () => {
  console.log(`[Coy Discover Modular Monolith] Server running on port ${config.port}`);
  console.log(`[Coy Discover Modular Monolith] Demo user: ${config.demoUserId}`);
});
