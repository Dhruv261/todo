<template>
  <div>
    <button class="btn">{{ buttonName }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonName"],
};
</script>

<style lang="scss">
.btn {
  font-size: 1.3rem;
  width: 100%;
  border: none;
  padding: 8px;
  color: white;
  border-radius: 4px;
  background-color: rgb(255, 173, 187);
  &:active {
    background-color: rgb(240, 175, 186);
    color: black;
  }
}
</style>