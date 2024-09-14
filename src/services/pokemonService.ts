import Pokemon, { IPokemon } from '../models/pokemonModel';

export const createPokemon = async (pokemonData: Partial<IPokemon>): Promise<IPokemon> => {
    const pokemon = new Pokemon(pokemonData); 
    return await pokemon.save();
  };
const getAllPokemon = async (): Promise<IPokemon[]> => {
  return await Pokemon.find();
};

const updatePokemon = async (id: string, data: Partial<IPokemon>): Promise<IPokemon | null> => {
  return await Pokemon.findByIdAndUpdate(id, data, { new: true });
};

const deletePokemon = async (id: string): Promise<void> => {
  await Pokemon.findByIdAndDelete(id);
};

export default {
  createPokemon,
  getAllPokemon,
  updatePokemon,
  deletePokemon,
};
