import axios from "axios";
export default {
  namespaced: true,
  state: {},
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },

    SET_USER(state, data) {
      state.data = data;
    },
  },
  actions: {
    async signIn({ dispatch }, credentials) {
      let response = await axios.post("/users/login", credentials);
      dispatch("attempt", response.data.token);
    },
  },

  async attempt({ commit }, token) {
    commit("SET_TOKEN", token);

    try {
      let response = await axios.get("/user/profile", {
        headers: {
          Authorization: `Bearer` + token,
        },
      });
      commit("SET_USER");
      console.log(response.data);
    } catch (error) {
      commit("SET_TOKEN", null);
      commit("SET_USER", null);
    }
  },
};
