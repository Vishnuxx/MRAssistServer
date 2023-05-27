


function User() {
    this.signup = async ({AUTH},{email , password}) => {
       const user = await AUTH.createUser({
        email: email,
        password: password
       })

       return user;
    }


    this.forgotPassword = async (AUTH , {email}) => {
       const link =  AUTH.generatePasswordResetLink(email);
       return link;
    }
}

module.exports.User = new User();