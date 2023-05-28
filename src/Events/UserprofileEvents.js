

module.exports.userProfileEvents = (events) => {
  events.on("user-profile-create-success", (res) => {
    console.log("profile created successfully", res);
  });

  events.on("user-profile-create-failed", (res) => {
    console.log("profile creation failed", res);
  });

  
};