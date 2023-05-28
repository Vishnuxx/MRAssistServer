const { env } = require("../config/envs");
const { DB } = require("../config/firebase")

const profilepath = env.FIREBASE_DB_ENDPOINT_PROFILES;

function UserProfile() {
    this.createUserProfile = async ( {uid , username , email}) => {
        const profile = await DB.collection(profilepath)
          .doc(uid)
          .set({ username, email });
        return profile;
    }

    this.getProfile = async ({uid}) => {
        return await DB.collection(profilepath).get(uid);
    }

}


module.exports.UserProfile = new UserProfile();








