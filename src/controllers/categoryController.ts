export {}

import { Request, Response, NextFunction } from 'express'
import bycrypt from 'bcryptjs'
import categoryService from '../services/categoryService'
import handleResponse from '../utils/handleResponse'

const getCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const categories = await categoryService.getCategories()

        return handleResponse(res, categories)
    } catch (e) {
        next(e)
    }
}

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await categoryService.getCategories()

        return handleResponse(res, category)
    } catch (e) {
        next(e)
    }
}

const getSubCategoriesOfCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id

        const subcategories = await categoryService.getSubCategoriesOfCategory(
            parseInt(id)
        )

        return handleResponse(res, subcategories)
    } catch (e) {
        next(e)
    }
}

const getAllProductsOfCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id

        const products = await categoryService.getAllProductsOfCategory(
            parseInt(id)
        )

        return handleResponse(res, products)
    } catch (e) {
        next(e)
    }
}

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body

        await categoryService.addCategory(name)

        return handleResponse(res, { msg: 'Category is successfully added.' })
    } catch (e) {
        next(e)
    }
}

const deleteCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await categoryService.deleteCategory(parseInt(req.params.id))

        return handleResponse(res, { msg: 'Category is successfully deleted.' })
    } catch (e) {
        next(e)
    }
}

const editCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id, name } = req.body
        await categoryService.editCategory(id, name)

        return handleResponse(res, { msg: 'Category is successfully edited.' })
    } catch (e) {
        next(e)
    }
}

const filterCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            sort,
            most_seller,
            most_subcategories,
            most_expensive,
            most_favorite_added,
            least_expensive,
            least_seller,
            least_sub_categories,
            least_favorite_added,
        } = req.body

        await categoryService.filterCategories(
            sort,
            most_seller,
            most_subcategories,
            most_expensive,
            most_favorite_added,
            least_expensive,
            least_seller,
            least_sub_categories,
            least_favorite_added
        )
    } catch (e) {
        next(e)
    }
}

const filterSubcategories = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            sort,
            most_seller,
            most_subcategories,
            most_expensive,
            most_favorite_added,
            least_expensive,
            least_seller,
            least_sub_categories,
            least_favorite_added,
        } = req.body

        await categoryService.filterSubcategories(
            sort,
            most_seller,
            most_subcategories,
            most_expensive,
            most_favorite_added,
            least_expensive,
            least_seller,
            least_sub_categories,
            least_favorite_added
        )
    } catch (e) {
        next(e)
    }
}

export = {
    getCategories,
    getCategory,
    addCategory,
    deleteCategory,
    editCategory,
    getSubCategoriesOfCategory,
    getAllProductsOfCategory,
    filterSubcategories,
    filterCategories,
}
