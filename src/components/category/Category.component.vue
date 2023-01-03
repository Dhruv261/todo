<template>
  <div class="category-container">
    <div
      class="business-category user-select category-card"
      :class="{ bsnBlue: this.$store.state.bsClr }"
      @click="bsClrTrigger"
    >
      Business
    </div>
    <div
      class="personal-category user-select category-card"
      :class="{ prsPink: this.$store.state.prsClr }"
      @click="prsClrTrigger"
      :style="{ marginLeft: '15px' }"
    >
      Personal
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {};
  },
  methods: {
    bsClrTrigger() {
      this.$store.state.bsClr = !this.$store.state.bsClr;
      this.$store.state.prsClr = false;
    },
    prsClrTrigger() {
      this.$store.state.prsClr = !this.$store.state.prsClr;
      this.$store.state.bsClr = false;
    },
  },
};
</script>

<style lang="scss">
.user-select {
  user-select: none;
  &:hover {
    cursor: pointer;
  }
}

.bsnBlue {
  background-color: #318ce7;
  color: white;
}
.prsPink {
  background-color: #c080ff;
  color: white;
}

.category-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0 20px 0;
  font-size: 1.7rem;
  .category-card {
    height: 100px;
    width: 100%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.58);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
}
</style>