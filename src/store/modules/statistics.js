export default {

    actions: {
        calculateStatistics({commit, state}) {
            commit('setNewAmountErrors');
            commit('updateLastIndex', state.indexEnterSymbol);
        },
        incrementEnterIndex({commit, state}) {
            commit('setNewIndexEnterSymbol', state.indexEnterSymbol + 1)
        },
        clearStatistics({commit}) {
            commit('setNewAmountErrors', 0);
            commit('updateAccuracy', 1000);
            commit('updateLastIndex', -1)
            commit('setNewIndexEnterSymbol', 0);
            commit('setDataSymbolsPerMinute', 0);
        }
    },
    mutations: {
        setNewAmountErrors(state, amountErrorEnter) {
            if (amountErrorEnter === 0) {
                state.amountErrorEnter = 0;
            } else {
                state.amountErrorEnter += 1;
            }
        },
        updateAccuracy(state, accuracy) {
            state.accuracy = accuracy;
        },
        updateLastIndex(state, lastIndex) {
            state.lastErrorIndex = lastIndex;
        },
        setNewIndexEnterSymbol(state, index) {
            state.indexEnterSymbol = index;
        },
        setDataSymbolsPerMinute (state, count) {
            state.symbolsPerMinute = count;
        }
    },
    state: {
        amountErrorEnter: 0,
        indexEnterSymbol: 0,
        lastErrorIndex: -1,
        symbolsPerMinute: 0,
        accuracy: 1000,
    },
    getters: {
        showingAmountErrors(state) {
            return state.amountErrorEnter;
        },
        showingIndexEnterSymbol(state) {
            return state.indexEnterSymbol;
        },
        showingLastErrorIndex(state) {
            return state.lastErrorIndex;
        },
        showingSymbolsPerMinute(state) {
            return state.symbolsPerMinute;
        },
        showingAccuracy(state) {
            return Math.floor(state.accuracy / 10) + '.' +  (state.accuracy % 10);
        },
    }
}
