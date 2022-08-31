import Vue from "vue";
import Vuex from "vuex";
import text from "./modules/texts";
import statistics from "./modules/statistics";

Vue.use(Vuex);

export default new Vuex.Store({

    actions: {
        keydownListener({ state, commit, dispatch }, eventKey) {
            if (
                eventKey &&
                eventKey !== 'Shift' &&
                eventKey !== 'Meta' &&
                eventKey !== 'CapsLock' &&
                eventKey !== 'Alt' &&
                eventKey !== 'Control' &&
                eventKey !== 'Tab' &&
                !state.isTrainerEnd
            ) {
                if (state.text.text[state.statistics.indexEnterSymbol].value === eventKey) {

                    dispatch('enterLetter', state.statistics.indexEnterSymbol)
                    dispatch('incrementEnterIndex');

                    if (state.statistics.indexEnterSymbol === state.text.text.length) {
                        commit('setIsTrainerEnd', true);
                        dispatch('endTime')
                    }
                } else {
                    if (state.statistics.indexEnterSymbol !== state.statistics.lastErrorIndex) {
                        commit('updateAccuracy', Math.floor(state.text.text.length * 1000 / (state.text.text.length + state.statistics.amountErrorEnter)));
                        dispatch('calculateStatistics');
                    }
                }

                if (!state.setupTimer) {
                    commit('setStatusTimer', true)
                    dispatch('startTime')
                }
            }
        },
        getInformationToTrainer({dispatch, commit}) {
            document.addEventListener('keydown', event => dispatch('keydownListener', event.key));
            dispatch('endTime');
            dispatch('clearStatistics');
            dispatch('fetchTexts')
            commit('updateTime', 0)
            commit('setStatusTimer', false);
            commit('setIsTrainerEnd', false)
        },
        startNewTrainer() {
            window.location.reload();
        },
        startTime({commit, state}) {
            commit('updateTimer',
                setInterval(() => {
                    commit('updateTime')
                    commit('setDataSymbolsPerMinute', Math.round((state.statistics.indexEnterSymbol + 1) * 60 / state.time))
                }, 1000)
            )
        },
        endTime({commit, dispatch, state}) {
            document.removeEventListener('keydown', event => dispatch('keydownListener', event.key))
            clearInterval(state.timer);
            commit('updateTimer', null);
        }
    },
    mutations: {
        setStatusTimer(state, status) {
            state.setupTimer = status;
        },
        updateTimer(state, timer) {
            state.timer = timer;
        },
        updateTime(state, time) {
            if (time === 0) {
                state.time = 0;
            } else {
                state.time += 1;
            }
        },
        setIsTrainerEnd(state, isTrainerEnd) {
            state.isTrainerEnd = isTrainerEnd;
        },
    },
    state: {
        setupTimer: false,
        timer: null,
        time: 0,
        isTrainerEnd: false,
    },
    getters: {
        getTime(state) {
            return Math.floor(state.time / 60) + ':' +  (state.time % 60 > 9 ? state.time % 60 :  '0' + state.time % 60);
        },
        getSetupTimer(state) {
            return state.setupTimer;
        },
        getIsTrainerEnd(state) {
            return state.isTrainerEnd;
        }
    },
    modules: {
        statistics,
        text,
    }
})
