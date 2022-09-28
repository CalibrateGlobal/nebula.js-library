const { createLogger, transport, format, transports } = require("winston");

// ---- logging function ---

const customerLogger = createLogger({
  trasnports: [
    new transports.File({
      filename: "customer.logger",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
    new transport.File({
      filename: "customer.error.logs",
      level: "error",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
module.exports = { cutomerLogger };
