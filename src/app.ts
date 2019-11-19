import { HelloController } from './controllers/hello-controller';
import express, { Request, Response } from 'express';

// controller config

const helloController = new HelloController();

// Express APP config
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

// API Endpoints
app.get('/', helloController.sayHello);

const server = app.listen(app.get("port"), () => {
  console.log(`App is running on http://localhost:${app.get('port')}`);
});