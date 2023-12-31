var Rollbar = require("rollbar");

module.exports.handler = async (event, context) => {
  var rollbar = new Rollbar({
    accessToken: "1d73fab489ac4daaa97ae44d8c22679b",
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: "production",
  });

  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
  // record a generic message and send it to Rollbar
  rollbar.critical("Crash while processing payment2");
  rollbar.warning("Facebook API unavailable2");
  rollbar.info("User logged in2");
  rollbar.debug("Cron job starting2");

  // can pass arbitrary params
  rollbar.info("User logged in", { loginType: "email+password" });
};
