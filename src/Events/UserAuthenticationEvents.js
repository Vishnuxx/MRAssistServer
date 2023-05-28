module.exports.userAuthenticationEvents = (events) => {
  events.on("email-authentication-success", (res) => {
    console.log("email-authentication-success", res);
  });

  events.on("email-authentication-failed", (res) => {
    console.log("email-authentication-failed", res);
  });

  events.on("user-delete-success", (res) => {
    console.log("user-delete-success", res);
  });
};
