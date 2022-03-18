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
const categoryService_1 = __importDefault(require("../services/categoryService"));
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryService_1.default.getCategories();
        return res.status(200).send(categories);
    }
    catch (e) {
        next(e);
    }
});
const getCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryService_1.default.getCategories();
        return res.status(200).send(category);
    }
    catch (e) {
        next(e);
    }
});
const addCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
});
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
});
const editCategory = (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
};
module.exports = {
    getCategories,
    getCategory,
    addCategory,
    deleteCategory,
    editCategory
};
//# sourceMappingURL=categoryController.js.map