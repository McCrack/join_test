//import http from "@/http";
import router from "@/router";
export default {
    state: {
        employees: [],
    },
    getters: {
        EMPLOYEES(state) {
            return state.employees;
        }
    },
    mutations: {
        stateEmployees(state, response) {
            state.employees = response.data;
        },
    },
    actions: {
        COMPANIES_INDEX({commit}, page = 1) {
            this.axios.get(`/api/employees?page=${page}`).then((response) => {
                commit("stateEmployees", response.data);
            }).catch((error) => {
                if (Number(error.response.status) === 401) {
                    router.push("login");
                } else {
                    console.error(error.response.data.message);
                }
            });
        },
    },
};
