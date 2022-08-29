<template>
  <div id="app" class="root">
    <input-trainer></input-trainer>
    <typing-statistics></typing-statistics>
    <div class="popup-winner" v-if="getIsTrainerEnd">
      Game Over!
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import InputTrainer from "@/components/InputTrainer";
import TypingStatistics from "@/components/TypingStatistics";

export default {
  name: 'App',
  components: {TypingStatistics, InputTrainer},
  computed: {
    ...mapGetters(["getIsTrainerEnd"]),
  },
  methods: {
    ...mapActions(["fetchTexts", "endTime", "startNewTrainer"]),
  },
  created() {
    this.startNewTrainer();
  },
  beforeDestroy() {
    this.endTime();
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap');
html, body {margin: 0; padding: 0}
#app {
  font-family: 'Source Code Pro', monospace;
  text-align: center;
  color: #2c3e50;
}

.root {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background: #e6e6e6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 100px 200px;
  gap: 40px;
}
.active {
  color: green;
}
</style>
