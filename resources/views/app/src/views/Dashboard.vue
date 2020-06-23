<template>
    <div>
        <div class="row cyan darken-3 white-text">
            <div class="bar col s4  flex-between-center">
                <i class="material-icons">business</i>
                <div class="caption flex-grow">Companies</div>
                <span class="cursor-pointer"
                      v-on:click="addCompany"
                      v-tooltip.bottom="{
                    content: 'Add Company',
                    classes: 'tooltip pink accent-4 white-text'
                }">
                <i class="material-icons">add</i>
            </span>
            </div>
            <div class="bar col s4">

            </div>
            <div class="bar col s4 flex-end-center">
                <span v-on:click="logout" ><i class="material-icons">exit_to_app</i></span>
            </div>
        </div>
        <main class="blue-grey darken-4">
            <div class="row">
                <companies-frame class="leftbar col s4"/>
                <div class="company col s4">
                    <company-frame v-if="COMPANY.id||newCompany"/>
                </div>
                <div class="rightbar col s4">
                    <employee-frame v-if="COMPANY.id"/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import CompaniesFrame from "../components/CompaniesFrame";
    import axios from "axios";

    import { mapGetters, mapActions } from 'vuex';

    import M from 'materialize-css'

    export default {
        name: "Dashboard",
        data() {
            return {
                newCompany: false
            }
        },
        components: {
            CompaniesFrame,
            CompanyFrame: () => import('../components/CompanyFrame'),
            EmployeeFrame: () => import('../components/EmployeeFrame'),
        },
        computed: {
            ...mapGetters(['COMPANY','EMPLOYEE']),
        },
        methods: {
            ...mapActions(['CREATE_COMPANY']),
            logout() {
                this.$store.dispatch('logout')
            },
            addCompany() {
                this.newCompany = true;
                this.$store.commit('dropCompany')
            },
        },
        created() {
            axios
                .defaults
                .headers
                .common['Authorization'] = "Bearer " + localStorage.getItem('token');
            M.AutoInit();
        },
    }
</script>

<style scoped>
    main {
        padding: 0 5px;
        min-height: calc(100vh - 48px);
    }
    .leftbar,
    .rightbar {
        padding: 4px 0;
    }
    .rightbar {
        top: 4px;
        position: sticky;
    }
    .company {
        top: 4px;
        position: sticky;
    }
</style>
