<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>${{error}}</h1>
      <router-link to="/">Go Back</router-link>
    </div>
    <div v-if="profileData" class="container">
      <h1 class="gamertag">
        <img :src="profileData.platformInfo.avatarUrl" alt class="platform-avatar" />
        {{profileData.platformInfo.platformUserId}}
      </h1>
      <div class="grid">
        <div>
          <img :src="profileData.segments[1].metadata.imageUrl" alt />
        </div>
        <div>
          <ul>
            <li>
              <h4>
                Selected Legend
                <p>{{profileData.metadata.activeLegend}}</p>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true;
    try {
      const res = await axios.get(
        `/api/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
      );
      this.profileData = res.data.data;
      console.log(this.profileData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.response.data.message;
    }
  }
};
</script>

<style>
</style>