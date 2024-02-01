const express = require("express");
const {
  getUsers,
  getUser,
  editUserInfo,
  login,
  createNewUser,
  changeProfile,
  googleLogin,
} = require("../controllers/User.controller");
const upload = require("../middlewares/imageUpload");
const router = express.Router();

router.get("/", getUsers);
router.get("/:email", getUser);
router.post("/google-login", googleLogin);
router.post("/login", login);
router.post("/register", createNewUser);
router.patch("/edit-user/:email", editUserInfo);
router.patch("/change-profile/:email", upload.single("profile"), changeProfile);
// router.post("/", upload.single("profile"), imageUpload);

module.exports = router;
