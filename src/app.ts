import * as helloController from './controllers/hello-controller';
import * as helloRoutes from './routes/hello-routes';
import express, { Request, Response } from 'express';

// controller config

// Express APP config
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

// API Endpoints
app.use('/', helloRoutes.router);

const server = app.listen(app.get("port"), () => {
  console.log(`App is running on http://localhost:${app.get('port')}`);
});