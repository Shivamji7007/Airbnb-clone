import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Simple Firebase function that logs a message and sends a response
export const helloWorld = onRequest((request, response) => {
  logger.info("Hello from Firebase!", { structuredData: true });
  response.send("Hello from Firebase!");
});
