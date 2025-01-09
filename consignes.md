# Énoncé :

Consommer l'API à l'URL: https://nestjs-pokedex-api.vercel.app/

## Page 1 :
- Liste des pokémons, par défaut 50 par 50 x
- Scroll en fin de page => refetch n pokémons en fonction du filtre "limit" ~
- Filtre le nom du pokémon x
- Filtre simple sur le type du pokémon x
- Affiche des pokémons sur des cards avec l'ID, l'image, le nom, les types x

## Page 2 :
- Au clic sur une card afficher les informations du pokémon concerné => sur une autre page ou modal ou autre x
- Afficher un bouton retour pour retourner sur la liste des pokémons x
- Afficher le nom, l'image et les stats x

### Paramètres : 

#### /pokemons

```json
{
  "id": 1,
  "pokedexId": 1,
  "name": "Bulbizarre",
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "stats": {
    "HP": 45,
    "speed": 45,
    "attack": 49,
    "defense": 49,
    "specialAttack": 65,
    "specialDefense": 65,
    "special_attack": 65,
    "special_defense": 65
  },
  "generation": 1,
  "evolutions": [
    {
      "name": "Herbizarre",
      "pokedexId": 2
    }
  ],
  "types": [
    {
      "id": 1,
      "name": "Poison",
      "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
    },
    {
      "id": 2,
      "name": "Plante",
      "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
    }
  ]
}
```

page => précise la page à récupérer
limit => le nombre de pokémons à récupérer
typeId => l'ID du type
types => un tableau d'ID de types
name => le nom du pokémon 

#### /pokemons/:pokedexId

Ne prend aucun paramètre

### /types

```json
{
  "id": 1,
  "name": "Poison",
  "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
}
```