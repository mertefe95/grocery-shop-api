"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const handleResponse_1 = __importDefault(require("../utils/handleResponse"));
const userLogin = (username, password) => {
    if (username !== 'Mert') {
        throw new Error('Hey');
    }
    else {
        handleResponse_1.default;
    }
};
const userRegister = () => {
};
const forgotPassword = () => {
};
const changeForgotPassword = () => {
};
const changePassword = () => {
};
const editDetails = () => {
};
const deleteAccount = () => {
};
module.exports = {
    userLogin,
    userRegister,
    forgotPassword,
    changeForgotPassword,
    changePassword,
    editDetails,
    deleteAccount
};
//# sourceMappingURL=userAuthService.js.map