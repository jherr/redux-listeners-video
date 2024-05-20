import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { Pokemon } from "../types";

/*
We are purposefully not using RTK Query here to demonstrate how to use the listener middleware with a more traditional Redux setup.
*/

interface PokemonState {
  search: string;
  pokemon: Pokemon[];
}

const initialState: PokemonState = {
  search: "",
  pokemon: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    searchUpdated: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    searchReset: (state) => {
      state.search = "";
    },
    pokemonUpdated: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { searchUpdated, pokemonUpdated, searchReset } =
  pokemonSlice.actions;

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useSearch = () => useAppSelector((state) => state.pokemon.search);
export const usePokemon = () =>
  useAppSelector((state) => state.pokemon.pokemon);
