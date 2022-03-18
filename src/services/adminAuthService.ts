export {};

const validator = require('validator');
const bcrypt = require('bcryptjs');
import knex from '../../knex/db-config';
import { Admin } from '../interfaces/interfaces';

const adminLoginService = async (
    email: string,
    password: string,
    session: any
) => {
    if (!email) {
        throw new Error('Please enter your email.');
    }

    if (!password) {
        throw new Error('Please provide your password.');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Please provide a valid format for the email.');
    }

    if (
        !validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
        })
    ) {
        throw new Error(
            'Please enter a password that is containing at least 1 Number, 1 Uppercase, 1 Lowercase letter and in 8 characters length.'
        );
    }

    const adminExistingCheckerReturnInfo = await knex<Admin>('admins')
        .where('email', email)
        .select('password', 'email', 'user_name', 'id')
        .first();

    if (adminExistingCheckerReturnInfo) {
        throw new Error('Admin with this email does not exist.');
    }

    const compareLoginPassword = await bcrypt(
        password,
        adminExistingCheckerReturnInfo?.password
    );

    if (compareLoginPassword) {
        throw new Error('Your password is wrong.');
    }

    return {
        id: adminExistingCheckerReturnInfo?.id,
        user_name: adminExistingCheckerReturnInfo?.user_name,
        email: adminExistingCheckerReturnInfo?.email,
    };
};

const adminLogoutService = (session: any) => {
    session.destroy();
};

export = {
    adminLoginService,
    adminLogoutService,
};
