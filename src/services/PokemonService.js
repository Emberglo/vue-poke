import { api } from './AxiosService'
import { AppState } from '../AppState'

class PokemonService {
  async getPokemon() {
    try {
      const res = await api.get('')
      console.log(res)
      AppState.pokemon = res.data.results
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const pokemonService = new PokemonService()
