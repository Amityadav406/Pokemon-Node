import { Request, Response, NextFunction } from 'express';
import pokemonService from '../services/pokemonService';
import { IPokemon } from '../models/pokemonModel';

// Add a new Pokémon
export const addPokemon = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, breed, description } = req.body;
      const image = req.file?.path; // Uploaded image path
  
      // Construct the data as Partial<IPokemon> since some fields might be missing
      const pokemonData: Partial<IPokemon> = { name, breed, description, image };
  
      // Pass the Partial<IPokemon> to the service
      const newPokemon = await pokemonService.createPokemon(pokemonData);
  
      res.status(201).json({
        message: 'Pokémon added successfully',
        data: newPokemon,
      });
    } catch (error) {
      next(error);
    }
  };

// Get all Pokémon
export const getAllPokemon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pokemons = await pokemonService.getAllPokemon();
    res.status(200).json({
      message: 'Pokémon retrieved successfully',
      data: pokemons,
    });
  } catch (error) {
    next(error);
  }
};

// Update a Pokémon
export const updatePokemon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, breed, description } = req.body;
    const updatedData: any = { name, breed, description };

    // Check if file is uploaded
    if (req.file) {
      updatedData.image = req.file.path;
    }

    const updatedPokemon = await pokemonService.updatePokemon(id, updatedData);

    if (!updatedPokemon) {
      return res.status(404).json({ error: 'Pokémon not found.' });
    }

    res.status(200).json({
      message: 'Pokémon updated successfully',
      data: updatedPokemon,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a Pokémon
export const deletePokemon = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await pokemonService.deletePokemon(id); // Just call the service without checking return value
      res.status(200).json({
        message: 'Pokémon deleted successfully',
      });
    } catch (error) {
      // If deletion failed, it will be caught here
      res.status(404).json({ error: 'Pokémon not found or already deleted.' });
      next(error);
    }
  };
  