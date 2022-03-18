"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const userAuthService_1 = __importDefault(require("../services/userAuthService"));
const handleResponse_1 = __importDefault(require("../utils/handleResponse"));
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        yield userAuthService_1.default.userLogin(username, password);
        return handleResponse_1.default(res, { msg: "True" });
    }
    catch (e) {
        next(e);
    }
});
const userRegister = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const forgotPassword = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const changeForgotPassword = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const changePassword = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const editDetails = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const deleteAccount = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const getUser = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const getAllUsers = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const approveUser = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const disapproveUser = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
const getMyUserInfo = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
module.exports = {
    getMyUserInfo,
    disapproveUser,
    approveUser,
    getAllUsers,
    getUser,
    userLogin,
    userRegister,
    forgotPassword,
    changeForgotPassword,
    changePassword,
    editDetails,
    deleteAccount
};
//# sourceMappingURL=userAuthController.js.map