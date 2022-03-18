"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = (req, res) => {
    try {
        console.log(req.sessionID);
        const { username, password } = req.body;
    }
    catch (e) {
    }
};
const register = () => {
    try {
    }
    catch (e) {
    }
};
const forgotPassword = () => {
    try {
    }
    catch (e) {
    }
};
const changeForgotPassword = () => {
    try {
    }
    catch (e) {
    }
};
const changePassword = () => {
    try {
    }
    catch (e) {
    }
};
const editDetails = () => {
    try {
    }
    catch (e) {
    }
};
const deleteAccount = () => {
    try {
    }
    catch (e) {
    }
};
module.exports = {
    login,
    register,
    forgotPassword,
    changeForgotPassword,
    changePassword,
    editDetails,
    deleteAccount
};
//# sourceMappingURL=userAuthController.js.map