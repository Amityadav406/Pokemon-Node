import mongoose, { Schema } from 'mongoose';

export interface IPokemon {
  name: string;
  breed: string;
  description: string;
  image?: string;
}

const PokemonSchema: Schema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: null },
});

const Pokemon = mongoose.model<IPokemon>('Pokemon', PokemonSchema);

export default Pokemon;
