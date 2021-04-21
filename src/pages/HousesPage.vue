<!------------------------------------------------------------------------------------------------>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>Houses</h2>
        <!-- <button title="Open Create Car Form"
                type="button"
                class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#new-car-form"
        >
          <i class="fas fa-plus" aria-hidden="true"></i>
        </button> -->
      </div>
    </div>
    <div class="row">
      <!-- houses go here | v-for 'house' in 'houses' -->
      <div class="" v-if="state.loading">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <House v-else v-for="house in state.houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<!------------------------------------------------------------------------------------------------>

<script>
import { computed, onMounted, reactive } from 'vue'
import House from '../components/HouseComponent'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'

export default {
  name: 'HousesPage',
  setup() {
    const state = reactive({
      loading: true,
      houses: computed(() => AppState.houses)
    })
    onMounted(async() => {
      try {
        await housesService.getHouses()
        state.loading = false
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state
    }
  },
  components: {
    House
  }
}
</script>

<!------------------------------------------------------------------------------------------------>

<style>

</style>

<!------------------------------------------------------------------------------------------------>
