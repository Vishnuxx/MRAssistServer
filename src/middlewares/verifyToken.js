const { APPEVENTS } = require("../config/appEvents");
const { AUTH } = require("../config/firebase")


module.exports.verifyToken = async (req , res , next) => {
    try {
       const {token} = req.body
       const tokendes = await AUTH.verifyIdToken(token);
       res.locals.uid = tokendes.uid
       next()
    } catch (error) {
       res.status(400).json({
         error: error,
       });
    }
}

