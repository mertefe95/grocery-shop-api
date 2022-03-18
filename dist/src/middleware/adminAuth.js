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
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../../knex/db-config"));
const adminAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.session.id) {
            return res.status(401).send({ msg: 'Token not found. Authorization has been denied.' });
        }
        const isAdminExisting = yield db_config_1.default('admins').where('id', req.session.id).first();
        if (!isAdminExisting) {
            return res.status(400).send({ msg: 'Only Admin access has been allowed.' });
        }
        req.user = req.session.id;
        next();
    }
    catch (err) {
        return res.status(500).send({ msg: 'Authorization is denied.' });
    }
});
exports.default = adminAuth;
//# sourceMappingURL=adminAuth.js.map