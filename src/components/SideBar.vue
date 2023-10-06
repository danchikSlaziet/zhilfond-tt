<template>
  <section class="sidebar">
    <div class="sidebar__container">
      <p class="sidebar__text">Поиск сотрудников</p>
      <input v-model="inputText" @change="change" class="sidebar__input" type="text" placeholder="Введите id или имя">
      <div class="sidebar__results">
        <p class="sidebar__results-text">Результаты</p>
        <div class="sidebar__result">
          <div v-on:click="onUserClick(user)" class="sidebar__user-card" v-for="user in filterUsers">
            <img class="sidebar__img" src="../img/photo-avatar.png" alt="фото сотрудника">
            <div class="sidebar__user-info">
              <p class="sidebar__user-name">{{ user.username }}</p>
              <p class="sidebar__user-mail">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputText: ''
    }
  },
  computed: mapGetters(['allUsers', 'filterUsers']),
  methods: {
    ...mapMutations(['updateAllUsers', 'getFilteredUsers', 'getUser']),
    ...mapActions(['fetchUsers']),
    change() {
      this.getFilteredUsers(this.inputText);
    },
    onUserClick(user) {
      this.getUser(user);
    }
  },
  async mounted() {
    this.fetchUsers();
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    padding: 27px 31px 31px 20px;
    .sidebar__text {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0 0 22px 0;
    }
    .sidebar__results-text {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0 0 10px 0;
    }
    .sidebar__input {
      margin: 0 0 22px 0;
      border-radius: 8px;
      border: 1.5px solid #E9ECEF;
      background: #FFF;
      color: #76787D;
      width: 100%;
      box-sizing: border-box;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      padding: 16px;
    }
    .sidebar__user-card {
      display: flex;
      align-items: center;
      overflow: hidden;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    }
    .sidebar__user-card:not(:last-child) {
      margin-bottom: 18px;
    }
    .sidebar__img {
      display: block;
      border-right: 1px solid #E0E0E0;
      width: 70px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      object-position: center center;
    }
    .sidebar__user-info {
      padding: 15px 15px 18px 15px;
    }
    .sidebar__user-name {
      color: #333;
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      margin: 0 0 5px 0;
    }
    .sidebar__user-mail {
      color: #76787D;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
  }
</style>