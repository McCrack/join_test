<template>
    <div>
        <form v-on:submit.prevent="saveEmployee"
              class="z-depth-1 white">
            <div v-if="EMPLOYEE.id" class="bar flex-between-center">
                <div class="caption">Employee ID: {{EMPLOYEE.id}}</div>
                <span class="cursor-pointer"
                      v-on:click="DELETE_EMPLOYEE"
                      v-tooltip.bottom="{
                        content: 'Dismiss',
                        classes: 'tooltip pink accent-4 white-text'
                    }">
                    <i class="material-icons">delete_sweep</i>
                </span>
            </div>
            <div v-else class="bar">
                <div class="caption">New Employee</div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input id="first_name"
                           type="text"
                           v-model="EMPLOYEE.first_name">
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name"
                           type="text"
                           v-model="EMPLOYEE.last_name">
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="employee_email"
                           type="email"
                            v-model="EMPLOYEE.email">
                    <label for="employee_email">E-Mail</label>
                </div>
                <div class="input-field col s6">
                    <input id="phone"
                           type="tel"
                           class="validate"
                           v-model="EMPLOYEE.phone">
                    <label for="phone">Phone</label>
                </div>
            </div>
            <button v-if="EMPLOYEE.id" type="submit" class="pink accent-4  btn-small">save</button>
            <button v-else type="submit" class="btn-small">create</button>
        </form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "EmployeeFrame",
        computed: {
            ...mapGetters([
                'COMPANY',
                'EMPLOYEE',
            ]),
        },
        methods: {
            ...mapActions([
                'UPDATE_EMPLOYEE',
                'CREATE_EMPLOYEE',
                'DELETE_EMPLOYEE'
            ]),
            saveEmployee() {
                if (this.EMPLOYEE.id) {
                    this.UPDATE_EMPLOYEE()
                } else {
                    this.EMPLOYEE.company_id = this.COMPANY.id;
                    this.CREATE_EMPLOYEE();
                }
            },
        },
    }
</script>

<style scoped>
    form {
        padding: 20px;
        border-radius: 5px;
    }
</style>
