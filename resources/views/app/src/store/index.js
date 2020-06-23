import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from "./Modules/auth";
import companies from "./Modules/companies";
import employees from "./Modules/employees";
import dictionary from "./Modules/dictionary";

export default new Vuex.Store({
  modules: {
    auth,
    companies,
    employees,
    dictionary,
  }
})
