import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur le pokédex</h1>
      <p className="text-lg text-gray-700">Découvrez les pokemons</p>
      <a href="/pokemons" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md">Voir les pokemons</a>
    </div>
  );
}
