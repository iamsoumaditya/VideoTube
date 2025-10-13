// import { asyncHandler } from "../utils/asyncHandler.js"
// import {ApiError} from "../utils/ApiError.js"
// import { User } from "../models/user.models.js"
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
// import { ApiResponse } from "../utils/ApiResponse.js"

// const registerUser = asyncHandler(async (req, res) => {
//   const { fullname, email, username, password } = req.body;

//   //validation
//   if (
//     [fullname, email, username, email, password].some(
//       (field) => field?.trim() === ""
//     )
//   ) {
//     throw new ApiError(400, "All fileds are required");
//     }

//     const existedUser = await User.findOne({
//         $or: [{ email },{username}]
//     })

//     if (existedUser) {
//         throw new ApiError(409, "User with email or username already exist");
//     }

//     const avatarLocalPath = req.files?.avatar?.[0]?.path
//     const coverLocalPath = req.files?.coverImage?.[0]?.path

//     if (!avatarLocalPath) {
//         throw new ApiError(400, "avatar file is missing");
//     }

//     // const avatar = await uploadOnCloudinary(avatarLocalPath)
//     // let coverImage = ""
//     // if (coverLocalPath) {
//     //     coverImage = await uploadOnCloudinary(coverLocalPath)
//     // }
//     let avatar;
//   try {
//         avatar = await uploadOnCloudinary(avatarLocalPath);
//         console.log("Uploaded avatar",avatar);

//     } catch (error) {
//         console.log("Error uploading avatar",error);
//         throw new ApiError(500, "Failed to upload Avatar");
//     }
//      let coverImage;
//      try {
//       coverImage = await uploadOnCloudinary(coverLocalPath);
//        console.log("Uploaded coverImage", coverImage);
//      } catch (error) {
//        console.log("Error uploading cover Image", error);
//        throw new ApiError(500, "Failed to upload coverImage");
//      }

//     const user = await User.create({
//         fullname,
//         avatar: avatar.url,
//         coverImage: coverImage?.url || "",
//         username: username.toLowerCase(),
//         email,
//         password,
//     })

//     const createdUser = await User.findById(user._id).select(
//       "-password -refreshToken"
//     );

//     if (!createdUser) {
//         throw new ApiError(500,"Something went wrong while registering user")
//     }

//     return res.status(201).json(new ApiResponse(200,createdUser,"User registered succesfully"))
// })

// export {registerUser}

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;

  if (
    [fullname, email, username, password].some(
      (field) => !String(field || "").trim()
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  let avatar, coverImage;

  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("Uploaded avatar", avatar);
  } catch (error) {
    console.error("Error uploading avatar", error);
    throw new ApiError(500, "Failed to upload avatar");
  }

  if (coverLocalPath) {
    try {
      coverImage = await uploadOnCloudinary(coverLocalPath);
      console.log("Uploaded cover image", coverImage);
    } catch (error) {
      console.error("Error uploading cover image", error);
      throw new ApiError(500, "Failed to upload cover image");
    }
  }

  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    username: username.toLowerCase(),
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

export { registerUser };