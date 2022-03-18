import { Router } from 'express';
const userAuthRoute = Router();
import userAuthController from '../controllers/userAuthController';

userAuthRoute.get('/info', userAuthController.getMyUserInfo);

userAuthRoute.post('/register', userAuthController.userRegister);

userAuthRoute.post('/login', userAuthController.userLogin);

userAuthRoute.get('/view-count', userAuthController.viewCount);

userAuthRoute.get('/', userAuthController.getAllUsers);

userAuthRoute.get('/:id', userAuthController.getUser);

userAuthRoute.put('/change-password/:id', userAuthController.editDetails);

userAuthRoute.put('/edit/:id', userAuthController.editDetails);

userAuthRoute.delete('/delete/:id', userAuthController.deleteAccount);

userAuthRoute.post('/approve/:id', userAuthController.approveUser);

userAuthRoute.post('/disapprove/:id', userAuthController.disapproveUser);

userAuthRoute.post('/forgot-password', userAuthController.forgotPassword);

userAuthRoute.post(
    '/forgot-password-change/:id',
    userAuthController.forgotPassword
);

export default userAuthRoute;
