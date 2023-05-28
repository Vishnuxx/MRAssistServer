module.exports.userAuthenticationEvents = (events) => {
  events.on("signup-validation-success", (res) => {
    console.log("signup validation success");
  });

  events.on("signup-validation-failed", (res) => {
    console.log("signup validation failed");
  });

  events.on("email-authentication-success", (res) => {
    console.log("email-authentication-success",res);
  });

  events.on("email-authentication-failed", (res) => {
    console.log("email-authentication-failed", res);
  });

  events.on("user-delete-success", (res) => {
    console.log("user-delete-success", res);
  });
};
