import showDetail from './mutations/showDetail';
import getDetail from './getters/getDetail';
import Operation from '@/data/models/Operation';

const state = (): { operation: Operation | {} } => ({
    operation: {},
});

const actions = {};

const mutations = {
    showDetail
};

const getters = {
    getDetail
};

export default {state, actions, mutations, getters}
