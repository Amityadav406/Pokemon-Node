import express from 'express';
import {
  addPokemon,
  getAllPokemon,
  updatePokemon,
  deletePokemon,
} from '../controllers/pokemonController';
import upload from '../middlewares/multerMiddleware';
import { validatePokemon } from '../middlewares/validationMiddleware';

const router = express.Router();

router.post('/', upload.single('image'), validatePokemon, addPokemon);
router.get('/', getAllPokemon);
router.put('/:id', upload.single('image'), updatePokemon);
router.delete('/:id', deletePokemon);

export default router;
