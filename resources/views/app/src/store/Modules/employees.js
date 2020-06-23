
import router from "@/router";
import axios from "axios";

export default {
    state: {
        employee: {},
    },
    getters: {
        EMPLOYEE(state) {
            return state.employee;
        }
    },
    mutations: {
        stateEmployee(state, data) {
            state.employee = data;
        },
        dropEmployee(state) {
            state.employee = {};
        },
        setId(state, id) {
            state.employee.id = id;
            console.log(state.employee);
        }
    },
    actions: {
        GET_EMPLOYEE({commit}, id) {
            axios.get(`/employees/${id}`)
                .then((response) => {
                    commit("stateEmployee", response.data);
                }).catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
        UPDATE_EMPLOYEE({state}) {
            axios.patch(`employees/${state.employee.id}`, state.employee)
                .then()
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
        CREATE_EMPLOYEE({commit, state}) {
            axios.post('employees', state.employee)
                .then(response => {
                    commit('stateEmployee', response.data)
                })
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                });
        },
        DELETE_EMPLOYEE({commit, state}) {
            axios.delete(`employees/${state.employee.id}`)
                .then(() => {
                    commit('dropEmployee');
                })
                .catch(error => {
                    (401 === Number(error.response.status))
                        ? router.push("login")
                        : console.error(error.data.message);
                })
        },
    },
};
