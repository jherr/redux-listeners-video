import type { Pokemon } from "../types";

export const API_HOST = "http://localhost:3333";

export async function pokemonSearch(search?: string) {
  const res = await fetch(`${API_HOST}/api?search=${search}`);
  return (await res.json()) as Pokemon[];
}

export async function getPokemonDetail(id: number) {
  const res = await fetch(`${API_HOST}/api/${id}`);
  return (await res.json()) as Pokemon;
}
