import React from "react";
import { createFileRoute } from "@tanstack/react-router";

import SearchGrid from "../components/SearchGrid";

import { usePokemon, store, pokemonUpdated } from "../store";
import { pokemonSearch } from "../api/pokemon";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: async () => {
    store.dispatch(pokemonUpdated(await pokemonSearch("")));
  },
});

export default function Index() {
  const pokemon = usePokemon();

  return <SearchGrid pokemon={pokemon || []} />;
}
