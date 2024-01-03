/**
 * 
 */
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url) //pegamos a URL
        .then((response) => response.json()) //pegamos a lista de pokemons
        .then((jsonBody) => jsonBody.results) //
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//transformamos a lista de pokemons e uma lista de busca de detalhes
        .then((detailRequest) => Promise.all(detailRequest)) //lista de requisições
        .then((getPokemonDetail) => {
            console.log(pokemonsDetails) //retorna a lista de detalhes
        })
}