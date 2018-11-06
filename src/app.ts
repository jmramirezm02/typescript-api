import * as express from "express";
import * as bodyParser from "body-parser";
import { HomeRoutes } from "./routes/v1/home";
import { CheckoutRoutes } from "./routes/v1/checkout";
import {NextFunction} from "express";

class App {
    public app: express.Application;
    public homeRoutes: HomeRoutes = new HomeRoutes();
    public checkoutRoutes: CheckoutRoutes = new CheckoutRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.homeRoutes.routes(this.app);
        this.checkoutRoutes.routes(this.app);
    }

    private config(): void {
        const allowCrossDomain = function(req: Request, res: Response, next: NextFunction) {
            /*const whiteList = ['http://localhost:4000', 'http://staging.upgrade-gp.com', 'http://staging.valora-gp.com',
                'http://localhost:4200'];
            let origin = req.headers.origin;
            if(whiteList.indexOf(origin) > -1){
                res.setHeader('Access-Control-Allow-Origin', origin);
            }*/

            // @ts-ignore
            res.header('Access-Control-Allow-Origin', '*');
            // @ts-ignore
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
            // @ts-ignore
            res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');

            // intercept OPTIONS method
            if ('OPTIONS' === req.method) {
                // @ts-ignore
                res.status(200);
                next();
            }
            else {
                next();
            }
        };
        // @ts-ignore
        this.app.use(allowCrossDomain);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static('src/public'));
    }
}

export default new App().app;