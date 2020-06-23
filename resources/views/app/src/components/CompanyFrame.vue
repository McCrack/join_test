<template>
    <div>
        <form v-on:submit.prevent="saveCompany" class="z-depth-1">
            <div class="bar">
                <div v-if="COMPANY.id" class="flex-between-center">
                    <div class="caption">Company ID: {{COMPANY.id}}</div>
                    <span class="cursor-pointer"
                            v-on:click="DELETE_COMPANY"
                            v-tooltip.bottom="{
                            content: DICTIONARY['delete_company'],
                            classes: 'tooltip pink accent-4 white-text'
                        }">
                        <i class="material-icons">delete</i>
                    </span>
                </div>
                <div v-else>
                    <div class="caption">{{ DICTIONARY['new_company'] }}</div>
                </div>
            </div>
            <div class="flex-start-center">
                <img v-if="COMPANY.id"
                     v-bind:src="COMPANY.logo"
                     class="company-logo">
                <div class="input-field flex-grow">
                    <input id="company_name"
                           type="text"
                           required
                           v-model="COMPANY.name">
                    <label for="company_name">{{ DICTIONARY['company_name'] }}</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="email"
                           type="email"
                           required
                           v-model="COMPANY.email">
                    <label for="email">E-Mail</label>
                </div>
                <div class="input-field col s6">
                    <input id="website"
                           type="url"
                           v-model="COMPANY.website">
                    <label for="website">{{ DICTIONARY['site'] }}</label>
                </div>
            </div>
            <button v-if="COMPANY.id" type="submit" class="pink accent-4  btn-small">{{ DICTIONARY['save'] }}</button>
            <button v-else type="submit" class="btn-small">{{ DICTIONARY['create'] }}</button>
        </form>
        <div v-if="COMPANY.id" class="company-employees white">
            <div class="bar flex-between-center">
                <i class="material-icons">supervisor_account</i>
                <span class="cursor-pointer"
                      v-on:click="addEmployee"
                      v-tooltip.bottom="{
                        content: DICTIONARY['add_employee'],
                        classes: 'tooltip pink accent-4 white-text'
                    }">
                    <i class="material-icons">add</i>
                </span>
            </div>
            <ul>
                <li class="employee"
                    v-bind:key="index"
                    v-on:click="GET_EMPLOYEE(employee.id)"
                    v-for="(employee, index) of COMPANY_EMPLOYEES">
                    <b>{{ employee.first_name }} {{ employee.last_name }}</b>
                    <div class="position pink-text">cleaning woman</div>
                    <div class="phone">{{ employee.phone }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "CompanyFrame",
        data() {
            return {
                newEmployee: false,
            }
        },
        computed: {
            ...mapGetters([
                'COMPANY',
                'EMPLOYEE',
                'COMPANY_EMPLOYEES',
                'DICTIONARY',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_COMPANY',
                'UPDATE_COMPANY',
                'CREATE_COMPANY',
                'DELETE_COMPANY',
                'GET_EMPLOYEE'
            ]),
            saveCompany() {
                this.COMPANY.id
                    ? this.UPDATE_COMPANY()
                    : this.CREATE_COMPANY();
            },
            addEmployee() {
                this.$store.commit('dropEmployee')
            },
        },
    }
</script>

<style scoped>

    form {
        padding: 20px;
        margin: 3px 0 10px 0;
        border-radius: 5px;
        background-color: white;
    }
    .company-logo {
        width: 80px;
        margin-right: 20px;
    }
    .company-employees {
        padding: 20px;
        border-radius: 5px;
    }
    .company-employees > ul {
        margin: 0;
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
    .employee {
        width: 100%;
        margin: 5px 0;
        cursor: pointer;
        padding-bottom: 5px;
        display: inline-block;
        border-bottom: 1px solid #CCCCCC;
    }
    .employee > .position,
    .employee > .phone{
        font-size: 13px;
        text-transform: capitalize;
    }
    .employee:hover {
        text-decoration: underline;
    }
</style>
