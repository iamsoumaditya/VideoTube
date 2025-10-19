import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { userLoginValidator, userRegisterValidator, userUpdateAccountDetailsValidator, userUpdatePassword } from "../validators/user.validators.js";
import { validate } from "../middlewares/validators.middleware.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js";
import { logoutUser } from "../controllers/user.controllers.js";


const router = Router();

//unsecured routes
router.route("/register").post(  
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  userRegisterValidator(),
  validate,
  registerUser
);
router.route("/login").post(userLoginValidator(),validate,loginUser)
router.route("/refresh-Token").post(refreshAccessToken)

//secured routes
router.route("/logout").post(verifyJwt, logoutUser)
router.route("/change-password").post(userUpdatePassword(),validate,verifyJwt, changeCurrentPassword)
router.route("/current-user").get(verifyJwt, getCurrentUser)
router.route("/channel/:username").get(verifyJwt, getUserChannelProfile)
router.route("/update-account").patch(userUpdateAccountDetailsValidator(),validate,verifyJwt,updateAccountDetails)
router.route("/update-avatar").patch(verifyJwt,upload.single("avatar"),updateUserAvatar)
router.route("/update-coverImage").patch(verifyJwt, upload.single("coverImage"), updateUserCoverImage)
router.route("/watch-history").get(verifyJwt,getWatchHistory)



export default router;
