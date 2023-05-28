const { AUTH } = require("../config/firebase");




function User() {
    
    this.signup = async ({email , password}) => {
       const user = await AUTH.createUser({
        email: email,
        password: password
       })

       return user;
    }

    this.deleteUser = async ({uid}) => {
        return await AUTH.deleteUser(uid)
    }

    this.forgotPassword = async ({email}) => {
       const link =  AUTH.generatePasswordResetLink(email);
       return link;
    }
}

module.exports.User = new User();