import IModal from '@/interfaces/IModal';

import toggleVisibility from './mutations/toggleVisibility';
import detectVisibility from './getters/detectVisibility';

const state = (): IModal => ({
    showModal: false,
});

const actions = {};

const mutations = {
    toggleVisibility
};

const getters = {
    detectVisibility
};

export default {state, actions, mutations, getters}
