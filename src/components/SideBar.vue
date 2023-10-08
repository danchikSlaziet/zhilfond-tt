<template>
  <section class="sidebar">
    <div class="sidebar__container">
      <p class="sidebar__text">Поиск сотрудников</p>
      <input v-model="inputText" @change="change" class="sidebar__input" type="text" placeholder="Введите id или имя">
      <div class="sidebar__results">
        <p class="sidebar__results-text">Результаты</p>
        <p v-bind:class="inputFocus ? 'sidebar__error sidebar__error_disable' : 'sidebar__error'" class="sidebar__error">начните поиск</p>
        <p class="sidebar__error">{{ getError }}</p>
        <div class="sidebar__result">
          <div v-bind:class="(activeIndex === index) ? 'sidebar__user-card_active' : ''" v-bind:key="index" v-on:click="onUserClick(user, $event); activeIndex = (activeIndex === index) ? null : index" class="sidebar__user-card" v-for="(user, index) in allUsers">
            <img class="sidebar__img" src="../img/photo-avatar.png" alt="фото сотрудника">
            <div class="sidebar__user-info">
              <p class="sidebar__user-name">{{ user?.username }}</p>
              <p class="sidebar__user-mail">{{ user?.email }}</p>
            </div>
          </div>
          <div v-bind:class="getLoader ? 'loader loader_active' : 'loader'"></div>
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
      inputFocus: false,
    }
  },
  computed: mapGetters(['allUsers', 'getError', 'getLoader']),
  methods: {
    ...mapMutations(['addUser', 'getUser', 'setVisible', 'setError', 'setLoader']),
    ...mapActions(['fetchUsers']),
    change() {
      this.fetchUsers(this.inputText);
      this.activeIndex = null;
      this.inputText = '';
      this.inputFocus = true;
      this.setVisible(false)
    },
    onUserClick(user, event) {
      this.getUser(user);
      if (event.currentTarget.className.includes('sidebar__user-card_active')) {
        this.setVisible(false)
      }
      else {
        this.setVisible(true);
      }
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
    @media screen and (max-width: 1440px) {
      width: auto;
      padding: 20px;
    }
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
    .sidebar__result {
      @media screen and (max-width: 1440px) {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .sidebar__error {
      color: #76787D;
      font-size: 14px;
      margin: 0 0 10px 0;
      font-weight: 400;
      line-height: normal;
    }
    .sidebar__error_disable {
      display: none;
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
      @media screen and (max-width: 1440px) {
        font-size: 13px;
      }
    }
    .sidebar__user-card {
      display: flex;
      align-items: center;
      overflow: hidden;
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
      transition: background .2s linear;
      @media screen and (max-width: 475px) {
        flex-direction: column;
        align-items: flex-start;
      }
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
      @media screen and (max-width: 475px) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #E0E0E0;
        aspect-ratio: 2 / 1;
      }
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
  .loader,
.loader:before,
.loader:after {
  background: #76787D;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #76787D;
  display: none;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader_active {
  display: block;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>