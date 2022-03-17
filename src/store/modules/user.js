export default {
    state: () => ({
        currentTheme: 'light'
    }),
    getters: {},
    mutations: {
        // Light Theme Function
        setLightTheme(state) {
            state.currentTheme = 'light';
            localStorage.setItem('theme', 'light');
        },
        // Dark Theme Function
        setDarkTheme(state) {
            state.currentTheme = 'dark';
            localStorage.setItem('theme', 'dark');
        }
    },
    actions: {
        toggleTheme({ commit }, store) {
            console.log(localStorage.getItem('theme'));
            if (store.store === 'dark') {
                commit('setLightTheme');
            } else {
                commit('setDarkTheme');
            }
        }
    },
}