const admin = require("../firebase/firebase");

async function verifyToken(req, res, next) {
  const appCheckToken = req.headers["x-firebase-appcheck"];

  if (!appCheckToken) {
    res.status(401);
    return next("Unauthorized");
  }  

  try {
    const decodedToken = await admin.auth().verifyIdToken(appCheckToken);

    req.user = decodedToken;
    
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = verifyToken;
