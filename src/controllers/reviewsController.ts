export {};

import knex from '../../knex/db-config';
import { Review } from '../interfaces/interfaces';
import reviewsService from '../services/reviewsService';
import handleResponse from '../utils/handleResponse';
import { Request, Response, NextFunction } from 'express';

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reviews = await reviewsService.getReviews();

        return handleResponse(res, reviews);
    } catch (e) {
        next(e);
    }
};

const getReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const review = await reviewsService.getReview(id);

        return handleResponse(res, review);
    } catch (e) {
        next(e);
    }
};

const makeReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, text, rating, product_id } = req.body;
        const user_id = 0;

        await reviewsService.makeReview(
            user_id,
            title,
            text,
            rating,
            product_id
        );

        return handleResponse(res, {
            msg: 'Your review is successfully made!',
        });
    } catch (e) {
        next(e);
    }
};

const deleteReview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const review_id = req.params.id;
        const user_id = req.user;

        await reviewsService.deleteReview(user_id, parseInt(review_id));

        return handleResponse(res, {
            msg: 'Your review is successfully deleted!',
        });
    } catch (e) {
        next(e);
    }
};

const editReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, text, product_id, review_id, rating } = req.body;
        const user_id = req.user;

        await reviewsService.editReview(
            user_id,
            product_id,
            review_id,
            text,
            title,
            rating
        );

        return handleResponse(res, {
            msg: 'Your review is successfully edited!',
        });
    } catch (e) {
        next(e);
    }
};

export = {
    getReviews,
    getReview,
    makeReview,
    deleteReview,
    editReview,
};
