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
    padding: 46px 50px 30px 50px;
    .header__logo {
      color: #E31F24;
      font-size: 32px;
      font-weight: 700;
      line-height: normal;
      margin: 0;
    }
    .header__page-name {
      color: #333;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
      margin: 0;
    }
  }
</style>