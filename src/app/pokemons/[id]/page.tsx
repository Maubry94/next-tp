"use client";

import api from "@/lib/api";
import { Pokemon } from "@/interfaces/Pokemon";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function PokemonDetailPage() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const router = useRouter();
    const id = useParams().id;

    const getPokemon = async () => {
        const response = await api.get(`/pokemons/${id}`);
        setPokemon(response.data);
    }

    useEffect(() => {
        if (id) {
            getPokemon();
        }
    }, [id]);

    if (!pokemon) return <div className="text-center text-gray-500">Loading...</div>;

    return (
        <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
            <button
                onClick={() => router.back()}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Retour
            </button>
            <div className="flex items-center space-x-4">
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={512}
                    height={512}
                    className="rounded-full border-4 border-gray-300 shadow-lg"
                />
                <h1 className="text-3xl font-semibold text-gray-800">{pokemon.name}</h1>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-700">Stats</h2>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                        <p className="font-medium">HP: <span className="text-gray-700">{pokemon.stats.HP}</span></p>
                        <p className="font-medium">Speed: <span className="text-gray-700">{pokemon.stats.speed}</span></p>
                        <p className="font-medium">Attack: <span className="text-gray-700">{pokemon.stats.attack}</span></p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                        <p className="font-medium">Defense: <span className="text-gray-700">{pokemon.stats.defense}</span></p>
                        <p className="font-medium">Special Attack: <span className="text-gray-700">{pokemon.stats.specialAttack}</span></p>
                        <p>Special Defense: {pokemon.stats.specialDefense}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}