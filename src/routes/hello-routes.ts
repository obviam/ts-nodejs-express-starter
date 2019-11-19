
import * as helloController from '../controllers/hello-controller';
import express, { Router } from 'express';

export const router = express.Router();

router.get('/hello', helloController.sayHello);

