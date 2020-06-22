//import http from "@/http";
import router from "@/router";
import axios from "axios";

export default {
    state: {
        companies: [],
    },
    getters: {
        COMPANIES(state) {
            return state.companies;
        }
    },
    mutations: {
        stateCompanies(state, response) {
            state.companies = response.data;
        },
    },
    actions: {
        GET_COMPANIES_LIST({commit}, page = 1) {
            axios.get(`companies?page=${page}`).then((response) => {
                commit("stateCompanies", response.data);
            }).catch((error) => {
                if (Number(error.response.status) === 401) {
                    router.push("login");
                } else {
                    console.error(error.response.data.message);
                }
            })
        },
    },
};
