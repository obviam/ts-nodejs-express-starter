import { Request, Response } from 'express';

export class HelloController {

    sayHello = (req: Request, res: Response) => {
        res.send('Hello');
    }
}