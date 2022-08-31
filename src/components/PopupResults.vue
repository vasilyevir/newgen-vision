<template>
  <div class="popup">
    <div class="popup__container">
      <h2>Your results</h2>
      <div class="popup__statistics">
        <div class="popup__element-statistic">
          <h3 class="popup__header">Time:</h3>
          <p class="popup__value">{{getTime}}</p>
        </div>
        <div class="popup__element-statistic">
          <h3 class="popup__header">Symbol per minute:</h3>
          <p class="popup__value">{{showingSymbolsPerMinute}}</p>
        </div>
        <div class="popup__element-statistic">
          <h3 class="popup__header">Accuracy:</h3>
          <p class="popup__value">{{showingAccuracy}}</p>
        </div>
      </div>
      <button class="popup__button" @click="startNewTrainer">Start new game</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PopupResults",
  computed: mapGetters(["showingAccuracy", "getTime", "showingSymbolsPerMinute"]),
  methods: mapActions(["startNewTrainer"])
}
</script>

<style scoped lang="scss">
  .popup {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 40px 80px;
      background: #e6e6e6;
      width: 80%;
      height: 80%;
      border-radius: 20px;
     }
    &__statistics {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    &__element-statistic {
      width: min-content;
      min-width: 250px;
    }
    &__header {
      font-weight: bold;
      font-size: 28px;
    }
    &__value {
      font-weight: normal;
      font-size: 20px;
    }
    &__button {
      background: none;
      outline: none;
      font-weight: 600;
      color: #bb7232;
      font-size: 24px;
      border: 1px solid #bb7232;
      cursor: pointer;
      min-width: 400px;
      height: 50px;
      border-radius: 8px;
      align-self: center;
    }
  }
</style>