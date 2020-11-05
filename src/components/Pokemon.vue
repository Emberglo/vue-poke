<template>
  <div class="Pokemon">
    {{ pokemon.name }}
    {{ pokemon.name }}
  </div>
</template>

<script>
// import { AppState } from '../AppState'
import { computed } from 'vue'
// import pokemonService from '../services/PokemonService'

export default {
  name: 'Pokemon',
  // props: ['pokemonProps'],
  props: {
    pokemonProps: Object
  },
  setup(props) {
    return {
      pokemon: computed(() => props.pokemonProps)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
