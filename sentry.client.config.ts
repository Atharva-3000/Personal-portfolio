import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fb0cc4459c24ea59a01bb9b6e43fcee5@o4507606292496384.ingest.de.sentry.io/4507606294790224",

  integrations: [
    Sentry.replayIntegration({
      maskAllText:true,
      blockAllMedia:true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});