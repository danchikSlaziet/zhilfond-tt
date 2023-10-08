<template>
  <section class="user-info">
    <div v-bind:class="this.userVisible ? 'user-info__wrapper' : 'user-info__wrapper_disable'">
      <img class="user-info__img" src="../img/photo-avatar.png" alt="фото сотрудника">
      <div class="user-info__about">
        <p class="user-info__name">{{ oneUser.name }}</p>
        <p class="user-info__contacts">email: <span class="user-info__contacts_col_gray">{{ oneUser.email }}</span></p>
        <p class="user-info__contacts">phone: <span class="user-info__contacts_col_gray">{{ oneUser.phone }}</span></p>
        <p class="user-info__about-heading">О себе:</p>
        <p class="user-info__about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div v-bind:class="!this.userVisible ? 'user-info__clue' : 'user-info__clue_disable'">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: mapGetters(['allUsers', 'oneUser', 'userVisible']),
  methods: {
    ...mapMutations(['updateAllUsers', 'getFilteredUsers']),
    ...mapActions(['fetchUsers']),
    change() {
      this.getFilteredUsers(this.inputText);
    }
  },
}
</script>
<style lang="scss" scoped>
  .user-info {
    border-radius: 0px 10px 10px 0px;
    border-left: 1px solid #E0E0E0;
    background: #FDFDFD;
    width: 77%;
    min-height: 300px;
    position: relative;
    padding: 30px 30px 30px 21px;
    @media screen and (max-width: 1440px) {
        width: auto;
        padding: 20px;
      }
    @media screen and (max-width: 768px) {
        border-left: none;
        border-radius: 10px;
    }
  .user-info__wrapper {
    display: flex;
    gap: 61px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
  }
  .user-info__wrapper_disable {
    display: none;
  }
  .user-info__clue {
    color: #76787D;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 20px;
  }
  .user-info__clue_disable {
    display: none;
  }
  .user-info__img {
    width: 44%;
    height: 286px;
    object-fit: cover;
    object-position: center center;
    border: 1px solid #E0E0E0;
    @media screen and (max-width: 768px) {
        width: 85%;
    }
    @media screen and (max-width: 450px) {
        height: 200px;
    }
  }
  .user-info__name {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin: 0 0 10px 0;
  }
  .user-info__contacts {
    color: #333;
    font-size: 14px;
    font-weight: 600;
    line-height: 140%; 
    margin: 0 0 10px 0;
    .user-info__contacts_col_gray {
      color: #76787D;
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
    }
  }
  .user-info__about-heading {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin: 20px 0 25px 0;
  }
  .user-info__about-text {
    color: #76787D;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  }
</style>