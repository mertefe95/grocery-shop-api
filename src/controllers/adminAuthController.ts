export {};

import { Request, Response, NextFunction } from 'express';
import adminAuthService from '../services/adminAuthService';
import handleResponse from '../utils/handleResponse';

const adminLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await adminAuthService.adminLoginService(
            email,
            password,
            req.session
        );
        handleResponse(res, user);
    } catch (e) {
        next(e);
    }
};

const adminLogout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await adminAuthService.adminLogoutService(req.session);
        handleResponse(res, { msg: 'Logout is successful.' });
    } catch (e) {
        next(e);
    }
};

export { adminLogin, adminLogout };
