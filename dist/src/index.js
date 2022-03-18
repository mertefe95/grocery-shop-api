"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const adminAuthRoute_1 = __importDefault(require("./routes/adminAuthRoute"));
const categoryRoute_1 = __importDefault(require("./routes/categoryRoute"));
const reviewsRoute_1 = __importDefault(require("./routes/reviewsRoute"));
const userAuthRoute_1 = __importDefault(require("./routes/userAuthRoute"));
const db_config_1 = __importDefault(require("../knex/db-config"));
const KnexSessionStore = require('connect-session-knex')(express_session_1.default);
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = express_1.default();
app.use(cookie_parser_1.default());
const store = new KnexSessionStore({
    knex: db_config_1.default,
    tablename: 'sessions',
});
app.use(express_session_1.default({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: parseInt(process.env.SESSION_MAX_AGE), sameSite: true, secure: process.env.NODE_ENV === "production" ? true : false },
    store
}));
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
    ],
    optionsSuccessStatus: 200,
};
app.use(cors_1.default(corsOptions));
app.use(express_1.default.json());
app.use(errorHandler_1.default);
app.use('/admin', adminAuthRoute_1.default);
app.use('/user', userAuthRoute_1.default);
app.use('/category', categoryRoute_1.default);
app.use('/reviews', reviewsRoute_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
//# sourceMappingURL=index.js.map