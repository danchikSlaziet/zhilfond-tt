<template>
  <header class="header">
    <h1 class="header__logo">Жилфонд</h1>
    <p class="header__page-name">Пользователь</p>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 46px 50px 30px 50px;
    .header__logo {
      color: #E31F24;
      font-size: 32px;
      font-weight: 700;
      line-height: normal;
      margin: 0;
      @media screen and (max-width: 530px) {
        font-size: 25px;
      }
    }
    .header__page-name {
      color: #333;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      margin: 0;
      @media screen and (max-width: 530px) {
        font-size: 12px;
      }
      @media screen and (max-width: 365px) {
        display: none;
      }
    }
  }
</style>