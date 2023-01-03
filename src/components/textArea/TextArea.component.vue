<template>
  <div>
    <input type="text" :placeholder="pclhld" class="text-area-main" />
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: ["pclhld"],
};
</script>

<style lang="scss">
.text-area-main {
  width: 100%;
  padding: 10px 15px;
  border: 1px grey;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 58%);
  transition: 700ms;
  font-size: 1.5rem;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 0px rgba(45, 129, 194, 1);
  }
}
</style>