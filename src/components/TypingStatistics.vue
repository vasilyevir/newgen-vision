<template>
  <div class="statistics">
    <p class="statistics__time">Time: <span class="statistics__params">{{getTime}}</span></p>
    <p class="statistics__speed">Symbols per minute: <span class="statistics__params">{{showingSymbolsPerMinute}}</span></p>
    <p class="statistics__accuracy">Accuracy: <span class="statistics__params">{{showingAccuracy}}%</span></p>
    <button class="statistics__new-game" @click="startNewTrainer">Start again</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TypingStatistics",
  computed: {
    ...mapGetters(['getTime', 'showingSymbolsPerMinute', 'showingAccuracy']),
  },
  methods: {
    ...mapActions(["startNewTrainer"]),
  },
}
</script>

<style scoped lang="scss">
.statistics {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20%;
  min-width: 250px;
  font-size: 16px;
  &__params {
    font-weight: 600;
    color: #bb7232;
  }
  &__new-game {
    background: none;
    outline: none;
    font-weight: 600;
    color: #bb7232;
    font-size: 24px;
    border: 1px solid #bb7232;
    cursor: pointer;
  }
}
</style>
