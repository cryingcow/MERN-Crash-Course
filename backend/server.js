import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errormiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
const port = process.env.PORT || 8000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server stared on port ${port}`));
