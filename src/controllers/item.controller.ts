import { Request, Response } from 'express';
import { Item, CreateItemInput } from '../models/item.model';
import { v4 as uuidv4 } from 'uuid';

// In-memory items store (instead of a database)
let items: Item[] = [
  {
    id: uuidv4(),
    name: 'Sample Item',
    description: 'This is a sample item',
    createdAt: new Date()
  }
];

export const getItems = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    count: items.length,
    data: items
  });
};

export const getItemById = (req: Request, res: Response) => {
  const id = req.params.id;
  const item = items.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }

  res.status(200).json({
    success: true,
    data: item
  });
};

export const createItem = (req: Request, res: Response) => {
  const input: CreateItemInput = req.body;

  if (!input.name) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a name for the item'
    });
  }

  const newItem: Item = {
    id: uuidv4(),
    name: input.name,
    description: input.description,
    createdAt: new Date()
  };

  items.push(newItem);

  res.status(201).json({
    success: true,
    data: newItem
  });
};

export const deleteItem = (req: Request, res: Response) => {
  const id = req.params.id;
  const itemIndex = items.findIndex(item => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }

  const deletedItem = items[itemIndex];
  items = items.filter(item => item.id !== id);

  res.status(200).json({
    success: true,
    message: 'Item deleted successfully',
    data: deletedItem
  });
};