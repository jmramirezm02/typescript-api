import { Request, Response } from "express";
import config from '../../configuration/config'

export class HomeRoutes {
    public routes(app: any): void {
        app
            .route('/')
            .get((req: Request, res: Response) => {
                res.sendFile(config.rootPath + 'public/index.html');
            })
    }
}