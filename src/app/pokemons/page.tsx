"use client";

import api from "@/lib/api"
import { Pokemon } from "@/interfaces/Pokemon";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PokemonsPage() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [types, setTypes] = useState<Pokemon[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50);
    const [name, setName] = useState("");
    const [typeId, setTypeId] = useState<number | null>(null);
    const router = useRouter();

    const getPokemons = async () => {
        const response = await api.get('/pokemons', {
            params: {
                page,
                limit,
                name,
                typeId
            }
        });
        // setPokemons(prevPokemons => [...prevPokemons, ...response.data]);
        setPokemons(response.data);
    }

    const getTypes = async () => {
        const response = await api.get('/types');
        setTypes(response.data);
    }

    useEffect(() => {
        setPokemons([]);
        setPage(1);
    }, [limit]);

    useEffect(() => {
        getPokemons();
        getTypes();
    }, [page, limit, name, typeId]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleCardClick = (id: number) => {
        router.push(`/pokemons/${id}`);
    };

    return (
        <div onScroll={handleScroll} className="p-4 pt-0 bg-gray-100 min-h-screen overflow-auto h-screen">
            <div className="sticky top-0 z-50 py-4 bg-gray-100">
                <h1 className="text-3xl font-bold text-center mb-6">Liste des pokemons</h1>
                <div className="flex gap-4 mb-6 justify-center">
                    <input 
                        type="text" 
                        placeholder="Nom du Pokémon" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="border p-2 rounded-lg shadow-sm"
                    />
                    <select 
                        value={typeId ?? ""} 
                        onChange={(e) => setTypeId(e.target.value ? Number(e.target.value) : null)} 
                        className="border p-2 rounded-lg shadow-sm"
                    >
                        <option value="">Tous les types</option>
                        {types.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <select 
                        value={limit} 
                        onChange={(e) => setLimit(Number(e.target.value))} 
                        className="border p-2 rounded-lg shadow-sm"
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemons.map(pokemon => (
                    <div
                        key={pokemon.id}
                        onClick={() => handleCardClick(pokemon.id)}
                        className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                    >
                        <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
                            #{pokemon.id}
                        </span>
                        <Image
                            src={pokemon.image}
                            alt={pokemon.name}
                            width={160}
                            height={160}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-2">{pokemon.name}</h2>
                        <div className="flex gap-2 mt-2">
                            {pokemon.types.map(type => (
                                <Image
                                    key={type.id}
                                    src={type.image}
                                    alt={type.name}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}