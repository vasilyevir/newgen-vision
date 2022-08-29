export default {
    actions: {
        async fetchTexts(ctx) {
            const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
            const texts = await res.json();

            const actualText = await texts[Math.floor(Math.random() * texts.length)].split('')

            ctx.commit('updateText', await actualText.map((symbol, index) => {
                return {
                    id: index,
                    value: symbol,
                    isIntroduced: false,
                }
            }))
        },
        enterLetter(ctx, index) {
            ctx.commit('updateText', ctx.state.text.map((el, indexEl) => {
                if (index !== indexEl) return el;
                return {...el, isIntroduced: true};
            }))
        }
    },
    mutations: {
        updateText(state, text) {
            state.text = text;
        },
    },
    state: {
        text: [],
    },
    getters: {
        showingText(state) {
            return state.text;
        }
    }
}
