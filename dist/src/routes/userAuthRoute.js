"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userAuthRoute = express_1.Router();
const userAuthController_1 = __importDefault(require("../controllers/userAuthController"));
userAuthRoute.get('/info', userAuthController_1.default.getMyUserInfo);
userAuthRoute.post('/register', userAuthController_1.default.userRegister);
userAuthRoute.post('/login', userAuthController_1.default.userLogin);
userAuthRoute.get('/', userAuthController_1.default.getAllUsers);
userAuthRoute.get('/:id', userAuthController_1.default.getUser);
userAuthRoute.put('/change-password/:id', userAuthController_1.default.editDetails);
userAuthRoute.put('/edit/:id', userAuthController_1.default.editDetails);
userAuthRoute.delete('/delete/:id', userAuthController_1.default.deleteAccount);
userAuthRoute.post('/approve/:id', userAuthController_1.default.approveUser);
userAuthRoute.post('/disapprove/:id', userAuthController_1.default.disapproveUser);
userAuthRoute.post('/forgot-password', userAuthController_1.default.forgotPassword);
userAuthRoute.post('/forgot-password-change/:id', userAuthController_1.default.forgotPassword);
exports.default = userAuthRoute;
//# sourceMappingURL=userAuthRoute.js.map