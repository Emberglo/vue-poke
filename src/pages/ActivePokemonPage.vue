<template>
  <!-- v-if makes page not load until the server sends back the info about he active pokemon -->
  <div class="active d-flex flex-column align-items-center bg-light border-rounded shadow" v-if="activePokemon.name">
    <h1>
      {{ activePokemon.name }}
    </h1>
    <img :src="activePokemon.sprites.front_default" alt="">
    <h5>{{ activePokemon.types[0].type.name }}</h5>
    <button class="btn btn-lg btn-primary" @click="addPokemon(activePokemon)"></button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
// import ActivePokemon from '../components/ActivePokemon'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
// import { router } from '../router'

export default {
  name: 'Active',
  components: {},
  setup() {
    const route = useRoute()
    onMounted(() => {
      pokemonService.getActivePokemon(route.params.name)
    })
    return {
      activePokemon: computed(() => AppState.activePokemon),
      addPokemon(activePokemon) {
        pokemonService.addPokemon(activePokemon)
        // router.push({ name: 'Pokedex' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
