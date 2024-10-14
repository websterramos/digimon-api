import pino from "pino";

export const logger = pino({
  formatters: {
    bindings: (bindings) => {
      return {};
    },
    level: (label) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});
