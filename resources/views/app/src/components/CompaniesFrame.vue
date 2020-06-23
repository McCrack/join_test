<template>
    <div>
        <ul class="collection z-depth-1">
            <li class="collection-item"
                v-on:click="selectCompany(company.id)"
                v-bind:class="{selected: (selected === company.id)}"
                v-for="(company, index) of COMPANIES.data"
                v-bind:key="index">
                <img v-bind:src="'http://join.local' + company.logo" alt="" width="140" class="circle">
                <div>
                    <div class="collection-item-title">{{company.name}}</div>
                    <p>
                        <b>Email:</b>
                        {{company.email}} <br>
                        <b>{{ DICTIONARY['site'] }}</b>:
                        <a target="_blank"
                           v-bind:href="company.website"
                           v-on:click.prevent="">{{company.website}}</a>
                    </p>
                </div>
            </li>
        </ul>
        <pagination class="pagination white" v-bind:data="Object.assign({}, COMPANIES)"
                    v-bind:limit="3"
                    v-bind:size="'small'"
                    v-bind:align="'center'"
                    v-on:pagination-change-page="GET_COMPANIES_LIST">
            <span slot="prev-nav">←</span>
            <span slot="next-nav">→</span>
        </pagination>

    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "CompaniesFrame",
        data() {
            return {
                selected: null,
            }
        },
        components: {
            pagination: () => import('laravel-vue-pagination')
        },
        computed: {
            ...mapGetters([
                'COMPANIES',
                'DICTIONARY'
            ]),
        },
        methods: {
            ...mapActions(['GET_COMPANIES_LIST', 'GET_COMPANY']),
            selectCompany(id) {
                this.selected = id;
                this.GET_COMPANY(id);
            }
        },
        mounted() {
            this.GET_COMPANIES_LIST();
        },
    }
</script>

<style scoped>
    .collection {
        margin: 0;
    }
    .collection-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .collection-item:nth-child(even) {
        font-size: 13px;
        background-color: #EEEEEE;
    }
    .collection-item:hover .title {
        text-decoration: underline;
    }
    .collection-item:hover {
        background-color: #e3f2fd;
    }
    .collection-item.selected {
        color: white;
        background-color: #444444;
    }
    .collection-item > div {
        flex-grow: 1;
        margin-left: 20px;
    }
</style>
