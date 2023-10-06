<template>
  <Header />
  <div class="info-wrapper">
    <SideBar />
    <UserInfo />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import UserInfo from './components/UserInfo.vue';
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: { SideBar, UserInfo, Header },
    
}
</script>

<style scoped lang="scss">
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background: #FDFDFD;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    margin: 0 50px 58px 50px;
    min-height: 575px;
  }
</style>