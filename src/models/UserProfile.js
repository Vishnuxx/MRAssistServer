const { DB } = require("../config/firebase")



function UserProfile() {
    this.createUserProfile = async ({DB , profileEndpointPath} , {username , email}) => {
        const profile = await DB.doc(profileEndpointPath);
        return profile;
    }
}


module.exports.UserProfile = new UserProfile();








