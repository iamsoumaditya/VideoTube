import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"


// in the field of response _ bcz it is common practice when we not use something  we place _ in that place
export const verifyJwt = asyncHandler(async (req, _,next) => {
    const token = req.cookies.accessToken || req.body.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
    if (!token) {
        throw new ApiError(401,"Unauthorized Access")
    }

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
          throw new ApiError(401, "Unauthorized Access- Can't able to get the user");
        }
        req.user = user
        next()

    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid accessToken")
    }
})