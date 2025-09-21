import express from 'express';
import env from 'dotenv';
import { initializeApp } from "firebase-admin/app";
import { routes } from './routes/index.js';

initializeApp();
env.config();

const app = express();
const port = process.env.port;

routes(app);

app.listen(port, () => {
  console.log(`server rodando na porta ${port}`);
});