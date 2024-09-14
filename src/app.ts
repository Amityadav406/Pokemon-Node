import express from 'express';
import pokemonRoutes from './routes/pokemonRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';

const app = express();

// Middleware
app.use(express.json());

// Static folder for images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/pokemon', pokemonRoutes);

// Global error handling middleware
app.use(errorHandler);

export default app;
