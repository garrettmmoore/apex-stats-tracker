<template>
  <section class="search">
    <h1>Find Apex Player Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="game">Game</label>
        <select name="game" id="game" v-model="game">
          <option value="apex">Apex</option>
          <option value="division-2">Division 2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="xbl">Xbox</option>
          <option value="psn">Playstation</option>
          <option value="uplay">Uplay</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">Gamertag</label>
        <input
          type="text"
          name="text"
          v-model="gamertag"
          id="gamertag"
          placeholder="Xbox gamertag, PSN ID, or Origin ID"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      game: "apex",
      platform: "xbl",
      gamertag: ""
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter a gamertag", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      } else {
        this.$router.push(
          `/profile/${this.game}/${this.platform}/${this.gamertag}`
        );
      }
    }
  }
};
</script>

<style>
</style>