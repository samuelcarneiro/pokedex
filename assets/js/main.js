const  offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Interface de uma promise
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    // .then((response) => {
    //     return response.json
    // })
    // .catch(function (jsonBody) {
    //     console.log(jsonBody)
    // })
    // .catch(function(error) {
    //     console.error(error)
    // })
    // .finally(function() {
    //     console.log('Requisição concluída!')
    // })
