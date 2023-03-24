import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

// Create an instance of the Express server
const app = express();


app.use(cors({
    credentials: true,
}));


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

// Start the server and listen on port 8000
server.listen(8000, () => {
  console.log('Server started on port 8000');
});

const MONGO_URL = 'mongodb+srv://npradmin:IwaAtlassaur49@nprobinson.7yutoqh.mongodb.net/test';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);