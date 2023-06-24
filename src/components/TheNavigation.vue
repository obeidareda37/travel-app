<template>
  <div id="nav">
    <router-link id="logo" to="/"> Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>
<!-- <style lang="css">
#nav .travel-active-link {
  color: red;
  border-bottom: 2px solid red;
}
</style> -->
<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
