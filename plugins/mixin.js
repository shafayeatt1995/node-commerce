import Vue from 'vue';
import { mapGetters } from 'vuex';

const GlobalData = {
    install(Vue, option) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    appName: 'app_name',
                }),
            },
        });
    },
};

Vue.use(GlobalData);
