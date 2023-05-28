const { DB } = require("../config/firebase")



function UserProfile() {
    this.createUserProfile = async ({DB , profileEndpointPath} , {username , email}) => {
        const profile = await DB.collection(profileEndpointPath).add({username , email});
        return profile;
    }
}


module.exports.UserProfile = new UserProfile();








