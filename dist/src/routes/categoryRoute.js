"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryRoute = express_1.Router();
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
categoryRoute.get('/categories', categoryController_1.default.getCategories);
categoryRoute.get('/category/:id', categoryController_1.default.getCategory);
categoryRoute.post('/category-add', categoryController_1.default.addCategory);
categoryRoute.put('/category-edit', categoryController_1.default.editCategory);
categoryRoute.delete('/category-delete', categoryController_1.default.deleteCategory);
exports.default = categoryRoute;
//# sourceMappingURL=categoryRoute.js.map