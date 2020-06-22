<template>
    <div>
        <div v-for="(company, index) of COMPANIES" v-bind:key="index">
            {{company.name}}
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "CompaniesFrame",
        computed: {
            ...mapGetters(['COMPANIES']),
        },
        methods: {
            ...mapActions(['GET_COMPANIES_LIST']),
        },
        mounted() {
            this.GET_COMPANIES_LIST(2);
        },
    }
</script>

<style scoped>

</style>
