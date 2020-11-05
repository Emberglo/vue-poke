<template>
  <div class="home">
    <h1>Pokemon</h1>
    <Pokemon v-for="pokemon in pokemon" :pokemon-props="pokemon" :key="pokemon.id" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
import Pokemon from '../components/Pokemon'

export default {
  name: 'Home',
  components: { Pokemon },
  setup() {
    onMounted(() => {
      pokemonService.getPokemon()
    })
    return {
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>
