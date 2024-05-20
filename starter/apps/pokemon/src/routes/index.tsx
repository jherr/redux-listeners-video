import React, { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useDispatch } from "react-redux";

import SearchGrid from "../components/SearchGrid";

import { usePokemon, useSearch, pokemonUpdated } from "../store";
import { pokemonSearch } from "../api/pokemon";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  const searchInputValue = useSearch();
  const pokemon = usePokemon();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function runSearch() {
      dispatch(pokemonUpdated(await pokemonSearch(searchInputValue)));
    })();
  }, [searchInputValue]);

  return <SearchGrid pokemon={pokemon || []} />;
}
