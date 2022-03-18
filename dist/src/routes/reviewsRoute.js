"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewsRoute = express_1.Router();
const reviewsController_1 = __importDefault(require("../controllers/reviewsController"));
reviewsRoute.get('/', reviewsController_1.default.getReviews);
reviewsRoute.get('/:id', reviewsController_1.default.getReview);
reviewsRoute.post('/add/:id', reviewsController_1.default.getReview);
reviewsRoute.put('/edit/:id', reviewsController_1.default.editReview);
reviewsRoute.delete('/delete/:id', reviewsController_1.default.deleteReview);
exports.default = reviewsRoute;
//# sourceMappingURL=reviewsRoute.js.map