import express, { Request, Response } from 'express';

// Express APP config
const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 3000);

// API Endpoints

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const server = app.listen(app.get("port"), () => {
  console.log(`App is running on http://localhost:${app.get('port')}`);
});