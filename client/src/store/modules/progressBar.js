const state = {
  refresh: false,
};

const getters = {
  refreshStatus: state => state.refresh,
};

const actions = {
  toggleRefresh({ commit }) {
    commit("updateRefreshStatus");
  },
};

const mutations = {
  updateRefreshStatus: state => (state.refresh = !state.refresh),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
