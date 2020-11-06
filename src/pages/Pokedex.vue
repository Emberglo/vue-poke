<template>
  <div class="Pokedex">
    <h1>Pokemon</h1>
    <Pokemon v-for="pokemon in pokemon" :pokemon-props="pokemon" :key="pokemon.name" />
  </div>
</template>

<script>
import { computed } from 'vue'
// import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
import Pokemon from '../components/Pokemon'

export default {
  name: 'Pokedex',
  components: { Pokemon },
  setup() {
    // onMounted(() => {
    //   pokemonService.getPokedex()
    // })
    return {
      pokemon: computed(() => AppState.pokedex)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
