


module.exports.userAuthenticationEvents = (events) => {

    events.on("email-authentication-success", (res) => {
      console.log("authenticated", res);
    });

}