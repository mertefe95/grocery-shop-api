export {};

import { Request, Response, NextFunction } from 'express';
import userAuthService from '../services/userAuthService';
import handleResponse from '../utils/handleResponse';

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const session = req.session;
        await userAuthService.userLogin(username, password, session);

        return handleResponse(res, { msg: 'True' });
    } catch (e) {
        next(e);
    }
};

const viewCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.session.views = req.session.views > 0 ? req.session.views + 1 : 1;

        req.session.cookie.secure = true;
        req.session.cookie.httpOnly = false;
        return res.send(`<p>View count: ${req.session.views}</p>`);
    } catch (e) {}
};

const userRegister = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const forgotPassword = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const changeForgotPassword = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (e) {
        next(e);
    }
};

const changePassword = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const editDetails = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const deleteAccount = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const approveUser = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const disapproveUser = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

const getMyUserInfo = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
        next(e);
    }
};

export = {
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
    deleteAccount,
    viewCount,
};
