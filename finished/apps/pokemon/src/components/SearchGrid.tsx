import React from "react";
import { Link } from "@tanstack/react-router";
import { useDispatch } from "react-redux";

import { searchUpdated, searchReset, useSearch } from "../store";

import { API_HOST } from "../api/pokemon";

import { Pokemon } from "../types";

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link to="/pokemon/$id" params={{ id: pokemon.id.toString() }}>
      <div className="rounded-xl max-h-96">
        <img
          src={`${API_HOST}/assets/${pokemon.name.toLowerCase()}.jpg`}
          alt={pokemon.name}
          className="w-full object-cover rounded-t-xl max-h-40"
        />
        <h3 className="text-2xl border-b-2 border-l-2 border-r-2 rounded-b-xl px-4 py-2">
          {pokemon.name}
        </h3>
      </div>
    </Link>
  );
};

export default function SearchGrid({ pokemon }: { pokemon: Pokemon[] }) {
  const search = useSearch();
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex">
        <input
          placeholder="Search for a Pokemon"
          value={search}
          onChange={(evt) => dispatch(searchUpdated(evt.target.value))}
          className="bg-white text-black border-gray-500 p-2 m-2 rounded-md text-xl w-full"
        />
        <button
          onClick={() => dispatch(searchReset())}
          className="bg-blue-500 text-white p-2 m-2 rounded-md text-xl"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap">
        {pokemon.map((pokemon) => (
          <div key={pokemon.id} className="w-1/5 p-2">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </>
  );
}
