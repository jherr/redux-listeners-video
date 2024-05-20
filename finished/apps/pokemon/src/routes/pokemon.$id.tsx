import React from "react";
import { createFileRoute } from "@tanstack/react-router";

import PokemonDetail from "../components/PokemonDetail";
import { getPokemonDetail } from "../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  loader: async ({ params }) => {
    return getPokemonDetail(+params.id);
  },
  component: Index,
});

export default function Index() {
  const pokemon = Route.useLoaderData();

  return <PokemonDetail pokemon={pokemon} />;
}
