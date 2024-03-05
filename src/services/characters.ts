import { Main } from "../types"

export const getCharacters = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const data = await resp.json() as Main
    return data.results
}