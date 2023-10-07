<template>
  <section class="user-info">
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
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: mapGetters(['allUsers', 'filterUsers', 'oneUser']),
  methods: {
    ...mapMutations(['updateAllUsers', 'getFilteredUsers']),
    ...mapActions(['fetchUsers']),
    change() {
      this.getFilteredUsers(this.inputText);
    }
  },
  async mounted() {
    this.fetchUsers();
  }
}
</script>
<style lang="scss" scoped>
  .user-info {
    display: flex;
    border-radius: 0px 10px 10px 0px;
    border-left: 1px solid #E0E0E0;
    background: #FDFDFD;
    gap: 61px;
    width: 77%;
    padding: 30px 30px 30px 21px;
  .user-info__img {
    width: 44%;
    height: 286px;
    object-fit: cover;
    object-position: center center;
    border: 1px solid #E0E0E0;
  }
  .user-info__about {

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