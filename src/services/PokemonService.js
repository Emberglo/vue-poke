/* eslint-disable no-console */
import { api } from './AxiosService'
import { AppState } from '../AppState'

class PokemonService {
  async getPokemon() {
    try {
      const res = await api.get('')
      AppState.pokemon = res.data.results
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async getActivePokemon(name) {
    try {
      const res = await api.get('' + name)
      console.log(res)
      AppState.activePokemon = res.data
    } catch (error) {
      console.error(error)
    }
  }

  addPokemon(activePokemon) {
    try {
      AppState.pokedex += activePokemon
    } catch (error) {
      console.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
