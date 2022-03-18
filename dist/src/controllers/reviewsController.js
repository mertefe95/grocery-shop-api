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
const db_config_1 = __importDefault(require("../../knex/db-config"));
const reviewsService_1 = __importDefault(require("../services/reviewsService"));
const getReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield db_config_1.default('reviews');
        return res.status(200).send(reviews);
    }
    catch (e) {
        next(e);
    }
});
const getReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        reviewsService_1.default.getReview();
    }
    catch (e) {
        next(e);
    }
});
const makeReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
});
const deleteReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
});
const editReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
});
module.exports = {
    getReviews,
    getReview,
    makeReview,
    deleteReview,
    editReview
};
//# sourceMappingURL=reviewsController.js.map