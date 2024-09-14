import { Request, Response, NextFunction } from 'express';

export const validatePokemon = (req: Request, res: Response, next: NextFunction) => {
  const { name, breed, description } = req.body;
  
  if (!name || !breed || !description) {
    return res.status(400).json({ message: 'Name, breed, and description are required' });
  }

  next();
};
