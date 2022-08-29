<template>
  <div class="textarea">
    <p class="textarea__row">
      <span
          class="textarea__letter"
          v-for="(letter) in showingText"
          :class=" letter.isIntroduced  ? 'textarea__letter_is-introduced':
           showingLastErrorIndex === letter.id ? 'textarea__letter_incorrect' :
            letter.id === showingIndexEnterSymbol ? 'textarea__letter_active' : ''"
          :key="letter.id"
      >{{letter.value}}</span>
    </p>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "inputTrainer",
  computed: {...mapGetters(['showingText', "showingLastErrorIndex", "showingIndexEnterSymbol"])},
}
</script>

<style scoped lang="scss">

.textarea {
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &__row {
    margin: 0;
    padding: 30px;
    width: 100%;
    height: min-content;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: start;
    box-sizing: border-box;
    font-size: 1.75em;
  }

  &__letter {
    content: '';
    line-height: 1.375;
    width: min-content;
    min-width: 16px;
    webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 2px;
    color: #272727;
    white-space: pre-wrap;
    &_active {
      color: white;
      background: #8ccd8c;
    }
    &_incorrect {
      color: white;
      background: red;
    }
    &_is-introduced {
      color: #8ccd8c;
    }
  }
}
</style>
