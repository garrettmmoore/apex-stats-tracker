<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>${{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="profileData" class="container">{{profileData.metadata.activeLegendName}}</div>
  </section>
</template>

<script>
</script>

<style>
</style>