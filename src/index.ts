import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './utils/connectDB';
import universityRoutes from './routes/universityRoutes';
import bankRoutes from './routes/bankRoutes';
import studentRoutes from './routes/studentRoutes';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());
const corsOptions = {
    // origin: 'http://localhost:5173',
    origin:true,
    credentials: true
}

app.use(cors(corsOptions));

// Routes
app.use('/api/universities', universityRoutes);
app.use('/api/banks', bankRoutes);
app.use('/api/students', studentRoutes);

// Default Route
app.get('/', function (req, res) {
    res.send("<h1>Server Working</h1>")
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
