import express from 'express';
import apiRoutes from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({
    message: 'TypeScript Node.js API is running (Test Ridwan)',
    endpoints: {
      getItems: 'GET /api/items',
      getItemById: 'GET /api/items/:id',
      createItem: 'POST /api/items',
      deleteItem: 'DELETE /api/items/:id'
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});