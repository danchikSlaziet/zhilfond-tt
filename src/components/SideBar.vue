<template>
  <section class="sidebar">
    <div class="sidebar__container">
      <p class="sidebar__text">Поиск сотрудников</p>
      <input v-model="inputText" @change="change" class="sidebar__input" type="text" placeholder="Введите id или имя">
      <div class="sidebar__results">
        <p class="sidebar__results-text">Результаты</p>
        <div class="sidebar__result">
          <div v-bind:class="(activeIndex === index) ? 'sidebar__user-card_active' : ''" v-bind:key="index" v-on:click="onUserClick(user); activeIndex = (activeIndex === index) ? null : index" class="sidebar__user-card" v-for="(user, index) in allUsers">
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
      inputText: '',
      isActive: false,
      activeIndex: null,
    }
  },
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapMutations(['addUser', 'getUser']),
    ...mapActions(['fetchUsers']),
    change() {
      this.fetchUsers(this.inputText);
      this.activeIndex = null;
      this.inputText = '';
    },
    onUserClick(user) {
      this.getUser(user);
    }
  },
}
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    padding: 27px 31px 31px 20px;
    width: 23%;
    flex-shrink: 0;
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
      transition: background .2s linear;
    }
    .sidebar__user-card:hover {
      cursor: pointer;
    }
    .sidebar__user-card_active {
        background: #E0E0E0;
        border: 1px solid #E0E0E0;
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
      word-break: break-word;
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