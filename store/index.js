export const state = () => ({
    app_name: process.env.APP_NAME,
});

export const getters = {
    app_name: (state) => state.app_name,
};

export const mutations = {};

export const actions = {};
