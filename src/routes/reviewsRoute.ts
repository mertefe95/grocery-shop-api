import {Router } from "express";
const reviewsRoute = Router();
import reviewsController from "../controllers/reviewsController";


reviewsRoute.get('/', reviewsController.getReviews);

reviewsRoute.get('/:id', reviewsController.getReview);

reviewsRoute.post('/add/:id', reviewsController.getReview);

reviewsRoute.put('/edit/:id', reviewsController.editReview);

reviewsRoute.delete('/delete/:id', reviewsController.deleteReview)



export default reviewsRoute;