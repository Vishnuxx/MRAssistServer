

module.exports.validationEvents = (events) => {
  events.on("token-validation-success", (res) => {
    console.log("token-validation-success", res);
  });

  events.on("token-validation-failed", (res) => {
    console.log("token-validation-failed", res);
  });
}