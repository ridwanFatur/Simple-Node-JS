import express from 'express';
import { 
  getItems, 
  getItemById,
  createItem, 
  deleteItem 
} from '../controllers/item.controller';

const router = express.Router();

// Item routes
router.get('/items', getItems);
router.get('/items/:id', getItemById);
router.post('/items', createItem);
router.delete('/items/:id', deleteItem);

export default router;