<!------------------------------------------------------------------------------------------------>

<template>
  <div class="house col-md-4 mb-3">
    <!-- route the parameter that is getting set with the "params" object -->
    <router-link :to="{name: 'HouseDetails', params: { id: house.id}}">
      <div class="card shadow">
        <img class="card-img-top" :src="house.imgUrl" alt="image of house">
        <div class="card-body">
          <h4 class="card-title">
            {{ house.bedrooms }} bed - {{ house.bathrooms }} bath
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<!------------------------------------------------------------------------------------------------>

<script>
export default {
  name: 'House',
  props: {
    house: {
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

<style>

</style>

<!------------------------------------------------------------------------------------------------>
