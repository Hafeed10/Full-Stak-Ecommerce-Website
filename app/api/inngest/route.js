import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Export the API handlers
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
