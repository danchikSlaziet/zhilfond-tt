export default {
  actions: {
    async fetchUsers({ commit }, value) {
      function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      commit('clearState');
      let arrrayOfValues = [];
      if (value) {
        arrrayOfValues = value.split(', ');
      }
      let lowerValues = [];
      for (let i = 0; i < arrrayOfValues.length; i++) {
        lowerValues[i] = arrrayOfValues[i].toLowerCase();
      }
      if (Number(lowerValues[0])) {
        lowerValues.forEach((elem) => {
          fetch(`https://jsonplaceholder.typicode.com/users?id=${elem}`)
            .then((res) => res.json())
            .then((json) => {
              commit('addUser', json[0]);
            })
            .catch(err => console.log(err))})
        }
      else {
        lowerValues.forEach((elem) => {
          fetch(`https://jsonplaceholder.typicode.com/users?username=${capitalizeFirstLetter(elem)}`)
            .then((res) => res.json())
            .then((json) => {
              if (json.length === 0) {
                console.log('такого пользователя нет')
              }
              else {
                commit('addUser', json[0]);
              }
            })
            .catch(err => console.log(err))})
      }
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
    }
  },
  state: {
    users: [],
    user: []
  },
  getters: {
    allUsers(state) {
      return state.users
    },
    oneUser(state) {
      return state.user
    }
  }
}
