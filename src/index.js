import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js';

dotenv.config();  
const app = express();


app.use(express.json());


app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server en  ${PORT}`);
});
