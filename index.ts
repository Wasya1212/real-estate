import express, { Express } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.port || 3000;

const app: Express = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});