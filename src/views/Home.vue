<template>
  <main class="main">
    <div class="user-name margin-20px">
      What's up,
      <input
        contentEditable="true"
        v-model="userName"
        class="name-text-area user-name"
        @change="nameLocalStorage"
      />
    </div>
    <div class="margin-20px">
      <p class="todo-text margin-10px-bottom">CREATE A TODO</p>
      <p class="margin-10px-bottom">What's on your todo list?</p>
      <div>
        <text-area pclhld="e.g. make a video" @change="updateTodo($event)" />
      </div>
    </div>
    <div class="margin-20px">
      <span>Pick a category</span>
      <category />
    </div>
    <div class="margin-20px margin-10px-bottom">
      <add-button
        class="margin-10px-bottom"
        buttonName="Add todo"
        @click="addButtonClick"
      />
      <div class="todo-list margin-10px-bottom">
        <p class="todo-list-text">TODO LIST</p>
        <list-component />
      </div>
    </div>
  </main>
</template>

<script>
import TextArea from "../components/textArea/TextArea.component.vue";
import Category from "../components/category/Category.component.vue";
import AddButton from "../components/Button/Button.component.vue";
import ListComponent from "../components/list/List.component.vue";
export default {
  name: "Home",
  data() {
    return {
      userName: "Enter your name",
    };
  },
  components: {
    TextArea,
    Category,
    AddButton,
    ListComponent,
  },
  mounted() {
    const localStorageName = () => {
      try {
        let name = localStorage.getItem("Name");
        if (name.length > 0) {
          this.userName = name;
        } else {
          undefined;
        }
      } catch (error) {
        console.log(error);
      }
    };

    const localStorageData = JSON.parse(localStorage.getItem("task"));
    console.log(localStorageData);
    this.$store.state.todoArray = localStorageData || [];
    // const taskData = () => {
    //   const tasksFromLocalStorage = localStorage.getItem("todo");
    //   console.log("tasksFromLocalStorage: ", JSON.parse(tasksFromLocalStorage));
    //   this.$store.state.todoArray = JSON.parse(localStorage.getItem("todo") || []);
    // };
    localStorageName();
    // taskData();
  },
  methods: {
    addButtonClick() {
      this.$store.commit("concatTodo");
    },
    updateTodo(e) {
      this.$store.state.task = e.target.value;
    },
    nameLocalStorage() {
      localStorage.setItem("Name", this.userName);
    },
  },
};
</script>

<style lang="scss">
.main {
  width: 600px;
}

.margin-20px {
  margin: 20px;
}

.margin-10px-bottom {
  margin-bottom: 10px;
}

.user-name {
  font-size: 1.8rem;
  font-weight: 600;
  .name-text-area {
    outline: none;
    border: none;
    width: auto;
  }
}

.todo-text {
  font-weight: 100;
  font-size: 1.1rem;
}

.todo-list-text {
  font-size: 1.1rem;
}
</style>
