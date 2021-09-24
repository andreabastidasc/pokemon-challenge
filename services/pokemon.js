import { axiosApi } from "./api";

const pokemonService = {}

pokemonService.getPokemones = async() => {
    return await axiosApi.get('/pokemon?offset=0&limit=20')
    .then(res => res.data)
    .catch(error => {
        throw error 
    })
}

pokemonService.getPokemonSpeciesByUrl = (url) => {
    const route = url.split('https://pokeapi.co/api/v2').pop()
    return axiosApi
      .get(route)
      .then((res) => res.data)
      .catch((err) => {
        throw err
      })
}

export default pokemonService