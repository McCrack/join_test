
import router from "@/router";
import axios from "axios";

export default {
    state: {
        pagination: {},
        companies: [],
        company: {},
        companyEmployees: [],
    },
    getters: {
        COMPANY(state) {
            return state.company;
        },
        COMPANIES(state) {
            return state.companies;
        },
        COMPANY_EMPLOYEES(state) {
            return state.companyEmployees;
        },
    },
    mutations: {
        stateCompanies(state, data) {
            state.companies = data;
        },
        stateCompany(state, data) {
            state.company = {
                id: data.id,
                name: data.name,
                email: data.email,
                logo: data.logo,
                website: data.website,
            }
            state.companyEmployees = data.employees;
        },
        dropCompany(state) {
            state.company = {};
        },
        setId(state, id) {
            state.company.id = id;
        },
    },
    actions: {
        GET_COMPANIES_LIST({commit}, page = 1) {
            axios.get(`companies?page=${page}`).then((response) => {
                commit("stateCompanies", response.data);
            }).catch(error => {
                (401 === Number(error.response.status))
                    ? router.push("login")
                    : console.error(error.data.message);
            });
        },
        GET_COMPANY({commit}, id) {
            axios.get(`companies/${id}`).then((response) => {
                commit("stateCompany", response.data);
            }).catch(error => {
                (401 === Number(error.response.status))
                    ? router.push("login")
                    : console.error(error.data.message);
            });
        },

        UPDATE_COMPANY({state}) {
            axios.patch(`companies/${state.company.id}`, state.company)
                .then()
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
        CREATE_COMPANY({commit, state}) {
            axios.post('companies', state.company)
                .then(response => {
                    commit('stateCompany', response.data)
                })
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
        DELETE_COMPANY({commit, state}) {
            axios.delete(`companies/${state.company.id}`)
                .then(() => {
                    commit('dropCompany');
                })
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
    },
};
