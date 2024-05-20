import React from "react";
import { Pokemon } from "../types";

import { API_HOST } from "../api/pokemon";

const InfoItem = ({ children }: { children: React.ReactNode }) => (
  <div className="italic text-right">{children}</div>
);

const InfoValue = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold">{children}</div>
);

export default function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        <img
          src={`${API_HOST}/assets/${pokemon.name.toLowerCase()}.jpg`}
          className="w-full rounded-tl-xl rounded-bl-xl h-full object-cover"
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-4 ml-4">{pokemon.name}</h1>
        <div className="grid gap-4 grid-cols-[3fr_7fr]">
          <InfoItem>Attack</InfoItem>
          <InfoValue>{pokemon.attack}</InfoValue>
          <InfoItem>Defense</InfoItem>
          <InfoValue>{pokemon.defense}</InfoValue>
          <InfoItem>Speed</InfoItem>
          <InfoValue>{pokemon.speed}</InfoValue>
          <InfoItem>HP</InfoItem>
          <InfoValue>{pokemon.hp}</InfoValue>
          <InfoItem>Special Attack</InfoItem>
          <InfoValue>{pokemon.special_attack}</InfoValue>
          <InfoItem>Special Defense</InfoItem>
          <InfoValue>{pokemon.special_defense}</InfoValue>
        </div>
      </div>
    </div>
  );
}
