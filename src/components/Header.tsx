export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-pokered text-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <a href="/" className="text-xl font-semibold">
              Pokédex
            </a>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="/pokemons">Pokémons</a>
              </li>
            </ul>
          </nav>
        </header>
    );
}