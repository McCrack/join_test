<template>
    <main>
        <div class="container">
            <h1>Dashboard</h1>
            <button v-on:click="logout">Logout</button>
            <companies-frame/>
        </div>
    </main>
</template>

<script>
    import CompaniesFrame from "../components/CompaniesFrame";
    import axios from "axios";
    export default {
        name: "Dashboard",
        components: {
            CompaniesFrame,
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        },
        created() {
            axios
                .defaults
                .headers
                .common['Authorization'] = "Bearer " + localStorage.getItem('token');
        },
    }
</script>

<style scoped>
    main {
        min-height: 100vh;
        background-color: #F5F5F5;
    }
    .container {
        padding: 5vh;
        margin: 0 auto;
        max-width: 1000px;
        min-height: 500px;
        background-color: white;
        box-shadow: 10px 10px 8px -8px #00000055;
    }
    .preloader {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
</style>
