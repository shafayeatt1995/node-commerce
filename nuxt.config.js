export default {
    head: {
        title: 'commerce',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: [],

    plugins: ['~/plugins/mixin.js'],

    components: true,

    buildModules: [],

    modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

    axios: {
        baseURL: '/',
    },

    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    build: {},
    serverMiddleware: [{ path: '/', handler: '~/backend' }],
};
