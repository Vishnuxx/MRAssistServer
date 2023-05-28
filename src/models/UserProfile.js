const { DB } = require("../config/firebase")



function UserProfile() {
    this.createUserProfile = async ({DBa , profileEndpointPath} , {uid , username , email}) => {
        const profile = await DB.collection(profileEndpointPath).doc(uid).set({username , email});
        return profile;
    }

}


module.exports.UserProfile = new UserProfile();








