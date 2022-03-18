export {}
import {Router } from "express";
const adminAuthRoute = Router();
import * as adminAuthController from "../controllers/adminAuthController";


adminAuthRoute.post('/login', adminAuthController.adminLogin);






export default adminAuthRoute;