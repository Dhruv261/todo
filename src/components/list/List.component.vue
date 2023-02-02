<template>
  <div>
    <div v-for="(data, index) in taskList" :key="index">
      <div
        class="task-container"
        :class="data.type === 'Personal' ? 'pink-highlight' : 'blue-highlight'"
      >
        <div class="task-left">
          <input type="checkbox" name="" id="" @change="changeComp($event, data.index)" />

          <div v-if="data.completed === true">
            <div class="completed-task margin-left-10px">
              {{ data.task }}
            </div>
          </div>
          <div v-else class="margin-left-10px">
            {{ data.task }}
          </div>
        </div>

        <div class="task-right">
          <button @click="deleteTask(index)" class="del-btn">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      // taskList: this.$store.state.todoArray,
      ifIsBusiness: this.$store.state.bsClr,
    };
  },
  computed: {
    taskList() {
      return this.$store.state.todoArray;
    },
  },
  methods: {
    changeComp(e, i) {
      this.$store.commit("changeCompletedState", { e, i });
    },
    deleteTask(i) {
      this.$store.commit("deleteTask", i);
    },
  },
};
</script>

<style lang="scss">
.pink-highlight {
  background-color: #c080ff65;
}
.blue-highlight {
  background-color: #318ce75e;
}
.task-container {
  width: 100%;
  min-height: 70px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 15px 0;
  font-size: 1.35rem;
  .task-left {
    margin: 0 0 0 15px;
    display: flex;
    align-items: center;
  }
  .task-right {
    margin: 0 15px 0 0;
  }
}

.margin-left-10px {
  margin-left: 10px;
}

.completed-task {
  text-decoration: line-through;
  color: grey;
}

.del-btn {
  color: white;
  background-color: rgb(212, 67, 67);
  border: none;
  padding: 6px 9px;
  border-radius: 4px;
  &:hover {
    background-color: rgb(212, 39, 39);
  }
  &:active {
    background-color: red;
  }
}

input[type="checkbox"] {
  transition: box-shadow 300ms;
  appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #ff000091;
}

input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 20px rgb(0, 255, 0);
}
</style>
