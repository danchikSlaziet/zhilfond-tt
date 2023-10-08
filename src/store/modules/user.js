export default {
  actions: {
    async fetchUsers({ commit }, value) {
      function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      commit('clearState');
      commit('clearError')
      let arrrayOfValues = [];
      if (value) {
        arrrayOfValues = value.replaceAll(' ', '').split(',');
      }
      let lowerValues = [];
      for (let i = 0; i < arrrayOfValues.length; i++) {
        lowerValues[i] = arrrayOfValues[i].toLowerCase();
      }
      if (Number(lowerValues[0])) {
        lowerValues.forEach((elem) => {
          commit('setLoader', true)
          fetch(`https://jsonplaceholder.typicode.com/users?id=${elem}`)
            .then((res) => res.json())
            .then((json) => {
              commit('setLoader', false)
              if (json.length === 0) {
                commit('setError', `Пользователь с id ${elem} не найден.`)
              }
              else {
                commit('addUser', json[0]);
              }
            })
            .catch((err) => {
              commit('setError', `ошибка сервера: ${err}`);
              commit('setLoader', false)
            })})
        }
      else {
        lowerValues.forEach((elem) => {
          commit('setLoader', true)
          fetch(`https://jsonplaceholder.typicode.com/users?username=${capitalizeFirstLetter(elem)}`)
            .then((res) => res.json())
            .then((json) => {
              commit('setLoader', false)
              if (json.length === 0) {
                commit('setError', `Пользователь с ником ${elem} не найден.`)
              }
              else {
                commit('addUser', json[0]);
              }
            })
            .catch((err) => {
              commit('setError', `ошибка сервера: ${err}`);
              commit('setLoader', false)
            })})
        }
        commit('setError', '');
    }
  },
  mutations: {
    addUser(state, users) {
      state.users.push(users);
    },
    clearState(state) {
      state.users = [];
    },
    getUser(state, payload) {
      state.user = payload
    },
    setVisible(state, bool) {
      state.userInfoVisible = bool;
    },
    setError(state, payload) {
      state.error = state.error + ' ' + payload;
    },
    clearError(state) {
      state.error = '';
    },
    setLoader(state, bool) {
      state.loaderVisible = bool;
    }
  },
  state: {
    users: [],
    user: [],
    error: '',
    userInfoVisible: false,
    loaderVisible: false,
  },
  getters: {
    allUsers(state) {
      return state.users
    },
    oneUser(state) {
      return state.user
    },
    userVisible(state) {
      return state.userInfoVisible
    },
    getError(state) {
      return state.error
    },
    getLoader(state) {
      return state.loaderVisible
    }
  }
}
