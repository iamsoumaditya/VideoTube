import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { userRegisterValidator } from "../validators/user.validators.js";
import { validate } from "../middlewares/validators.middleware.js"
import { verifyJwt } from "../middlewares/auth.middlewares.js";
import { logoutUser } from "../controllers/user.controllers.js";


const router = Router();

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

//secured routes
router.route("/logout").post(verifyJwt,logoutUser)

export default router;
