import express from "express";
import type { Express, Request, Response } from "express";
import authRouter from "./module/auth/auth.controller"
import cors from "cors"
import { rateLimit } from 'express-rate-limit'
import helmet from "helmet";
import { env } from "./config/env.service";
import { Database_Connection } from "./database/connection";
import { Global_Error_Handler } from "./middleware/ErrorHandling";






export const bootstrap = () => {
    const app: Express = express();

    app.use(express.json());

    app.use(cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH"]
    }))

    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: 100,
    })

    app.use(limiter)
    app.use(helmet());
    Database_Connection()
    app.use('/auth', authRouter)
    app.use(Global_Error_Handler)
    app.listen(env.port, () => {
        console.log(`Server is running on port ${env.port}`);
    });
};