import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import adminAuthRoute from './routes/adminAuthRoute';
import categoryRoute from './routes/categoryRoute';
import reviewsRoute from './routes/reviewsRoute';
import userAuthRoute from './routes/userAuthRoute';
import { Application } from 'express';
import knex from '../knex/db-config';
const KnexSessionStore = require('connect-session-knex')(session);
import errorHandler from './middleware/errorHandler';
const app: Application = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(cookieParser());

const store = new KnexSessionStore({
    knex,
    tablename: 'sessions', // optional. Defaults to 'sessions'
    createtable: true,
});

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: parseInt(process.env.SESSION_MAX_AGE),
            sameSite: true,
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
        store,
    })
);

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(errorHandler);

//app.use('/admin', adminAuthRoute)

app.use('/user', userAuthRoute);

//app.use('/category', categoryRoute)

// app.use('/reviews', reviewsRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
