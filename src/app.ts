import * as express from "express";
import * as bodyParser from "body-parser";
import { HomeRoutes } from "./routes/v1/home";

class App {
    public app: express.Application;
    public homeRoutes: HomeRoutes = new HomeRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.homeRoutes.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('src/public'));
    }
}

export default new App().app;