import express from "express";

import {
    addProject,
    addTimeline,
    addYoutube,
    contact,
    deleteProject,
    deleteTimeline,
    deleteYoutube,
    getUser,
    login,
    logout,
    myProfile,
    register,
    updateUser
} from "../controller/User.js"
import { isAuthenticated } from "../middlewares/auth.js";

export const userRoute = express.Router()

userRoute.route("/register").post(register)

userRoute.route("/login").post(login)

userRoute.route("/logout").get(logout)

userRoute.route("/user").get( getUser)

userRoute.route("/me").get(isAuthenticated, myProfile);

userRoute.route("/admin/update").put( isAuthenticated, updateUser)

userRoute.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRoute.route("/admin/youtube/add").post(isAuthenticated, addYoutube);
userRoute.route("/admin/project/add").post(isAuthenticated, addProject);

userRoute.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
userRoute.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);
userRoute.route("/admin/project/:id").delete(isAuthenticated, deleteProject);


userRoute.route("/contact").post(contact)

