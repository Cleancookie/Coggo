import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'body-parser';
import * as morgan from 'morgan';
import * as socketIO from 'socket.io';
import { BoneRouter } from '../Config/Routes';

export class BoneApp {
    private app: express.Express;
    private port: number;
    private io: socketIO.Server;
    private viewFolder: string;

    constructor() {
        this.app = express();
        this.port = 13337;
        this.viewFolder = path.join(__dirname, '../Views');

        this.initView();
        this.initMiddleware();
        this.initRoutes();
    }

    private initView(): void {
        this.app.use(express.static(this.viewFolder + '/Public'));
        this.app.set('views', this.viewFolder);
        this.app.set('view engine', 'ejs');
    }

    private initMiddleware(): void {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        })); 
        this.app.use(cookieParser());
    }

    private initRoutes(): void {
        this.app.use('/', BoneRouter.Instance.Routes);
    }

    public letsaGo(): void {
        this.io = socketIO(this.app.listen(this.port));
        console.log('Set sail from port ' + this.port)
    }
}