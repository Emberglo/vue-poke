<template>
  <div class="active d-flex flex-column align-items-center bg-light border-rounded shadow">
    <h1>
      {{ activePokemon.name }}
    </h1>
    <img :src="activePokemon.sprites.front_default" alt="">
    <h5>{{ activePokemon.types[0].type.name }}</h5>
    <button class="btn btn-lg" onclick="addPokemon()"></button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
// import ActivePokemon from '../components/ActivePokemon'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import { router } from '../router'

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
      addPokemon() {
        router.push({ name: 'Pokedex' })
        pokemonService.addPokemon()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
