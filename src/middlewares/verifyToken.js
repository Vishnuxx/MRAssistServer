const { APPEVENTS } = require("../config/appEvents");
const { AUTH } = require("../config/firebase")


module.exports.verifyToken = async (req , res , next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const uid = req.query.uid;
       const tokendes = await AUTH.verifyIdToken(token);
       res.locals.uid = uid
       APPEVENTS.emit("token-validation-success" , tokendes);
       next()
    } catch (error) {
        APPEVENTS.emit("token-validation-failed", error);
       res.status(400).json({
         error: error,
       });
    }
}

