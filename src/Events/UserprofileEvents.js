module.exports.userProfileEvents = (events) => {
  events.on("user-profile-create-success", (res) => {
    console.log("profile created successfully", res);
  });

  events.on("user-profile-create-failed", (res) => {
    console.log("profile creation failed", res);
  });

  events.on("user-profile-fetched-success", (res) => {
    console.log("profile fetched successfully", res);
  });

  events.on("user-profile-fetched-failed", (res) => {
    console.log("profile fetched failed", res);
  });

  events.on("user-profile-doesnt-exist", (res) => {
    console.log("user-profile-doesnt-exist", res);
  });
};

;