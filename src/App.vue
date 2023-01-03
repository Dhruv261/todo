<template>
  <div class="m-x">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-size: 1.2rem;
  box-sizing: border-box;
}
.m-x {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>