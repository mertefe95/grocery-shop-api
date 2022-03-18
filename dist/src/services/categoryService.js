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
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield db_config_1.default('category');
    return categories;
});
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('Please provide a category id.');
    }
    const category = yield db_config_1.default('category').where('id', id);
    return category;
});
const addCategory = (name) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name) {
        throw new Error('Please provide a category id.');
    }
    const categoryExists = yield db_config_1.default('category').where('name', name).first();
    if (!categoryExists) {
        throw new Error('This category already exists.');
    }
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('Please provide an category id.');
    }
    yield db_config_1.default('category').where('id', id).del();
});
const editCategory = (id, newName) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('Please provide an category id.');
    }
    if (!newName) {
        throw new Error('Please provide a category name.');
    }
    const categoryExists = yield db_config_1.default('category').where('name', newName).whereNot('id', id).first();
    if (categoryExists) {
        throw new Error('This category name is used by another category.');
    }
    yield db_config_1.default('category').insert({ name: newName });
});
module.exports = {
    getCategories,
    getCategory,
    addCategory,
    deleteCategory,
    editCategory
};
//# sourceMappingURL=categoryService.js.map