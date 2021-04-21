<!------------------------------------------------------------------------------------------------>

<template>
  <div class="car col-md-4 mb-3">
    <!-- Route parameter getting set with the Params object -->
    <router-link :to="{name: 'CarDetails', params: { id: car.id }}">
      <div class="card shadow">
        <img class="card-img-top" :src="car.imgUrl" alt="image of car">
        <div class="card-body">
          <h4 class="card-title">
            {{ car.make }} - {{ car.model }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<!------------------------------------------------------------------------------------------------>

<script>
export default {
  name: 'Car',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<!------------------------------------------------------------------------------------------------>

<style lang="scss" scoped>

</style>

<!------------------------------------------------------------------------------------------------>
