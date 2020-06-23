
import router from "@/router";
import axios from "axios";

export default {
    state: {
        dictionary: {},
    },
    getters: {
        DICTIONARY(state) {
            return state.dictionary;
        }
    },
    mutations: {
        stateDictionary(state, data) {
            state.dictionary = data;
        },
    },
    actions: {
        LOAD_DICTIONARY({commit}, lang) {
            axios.get(`/dictionary/${lang}`)
                .then((response) => {
                    commit("stateDictionary", response.data);
                }).catch(error => {
                (401 === Number(error.response.status))
                    ? router.push("login")
                    : console.error(error.data.message);
            });
        },
    },
};
