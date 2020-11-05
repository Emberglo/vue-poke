<template>
  <div class="Pokemon">
    <router-link :to="{name: 'Active', params: {name: pokemonProps.name}}">
      {{ pokemon.name }}
    </router-link>
  </div>
</template>

<script>
// import { AppState } from '../AppState'
import { computed } from 'vue'
import { pokemonService } from '../services/PokemonService'

export default {
  name: 'Pokemon',
  // props: ['pokemonProps'],
  props: {
    pokemonProps: Object
  },
  setup(props) {
    return {
      pokemon: computed(() => props.pokemonProps),
      getActivePokemon(name) {
        pokemonService.getActivePokemon(name)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
