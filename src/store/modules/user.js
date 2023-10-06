export default {
  actions: {
    async fetchUsers({ commit }) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
      const users = await res.json()

      commit('updateAllUsers', users)
    },
  },
  mutations: {
    updateAllUsers(state, users) {
      state.users = users;
    },
    getFilteredUsers(state, value) {
      state.filteredUsers = state.users.filter((user) => {
        const arrrayOfValues = value.split(', ');
        let lowerValues = [];
        for (let i = 0; i < arrrayOfValues.length; i++) {
          lowerValues[i] = arrrayOfValues[i].toLowerCase();
        }
        if (Number(lowerValues[0])) {
          return lowerValues.includes(String(user.id));
        }
        else {
          return lowerValues.includes(user.username.toLowerCase());
        }
      });
    },
    getUser(state, payload) {
      state.user = payload
    }
  },
  state: {
    users: [],
    filteredUsers: [],
    user: []
  },
  getters: {
    allUsers(state) {
      return state.users
    },
    filterUsers(state) {
      return state.filteredUsers
    },
    oneUser(state) {
      return state.user
    }
  }
}
