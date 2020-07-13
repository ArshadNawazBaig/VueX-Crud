<template>
  <div class="todos">
    <h3>Add Todo</h3>
    <form class="todo-form" @submit.prevent="handleAddTodo">
      <input type="text" placeholder="Add New Todo Here..." v-model="title" />
      <button class="button" type="submit">Add Todo</button>
    </form>
    <h3>Todos</h3>
    <Loader :loading="loading" />
    <div class="todos-wrapper" v-if="todos">
      <div
        class="todo-wrapper"
        v-for="todo in todos"
        :key="todo.id"
        @dblclick="handleDblClick(todo)"
      >
        <div class="todo-content">
          <span class="span1" v-if="todo.completed">&#10004;</span>
          <p class="todo-title">{{ todo.title }}</p>
          <span class="span2" @click="deletTodo(todo.id)">&#10005;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "../components/Loader";
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters(["todos", "loading"]),
  },
  components: {
    Loader,
  },
  methods: {
    ...mapActions([
      "handleGetTodos",
      "handleDeleteTodo",
      "addTodo",
      "updateTodo",
    ]),
    deletTodo(id) {
      this.handleDeleteTodo(id);
    },
    handleAddTodo() {
      const newTodo = {
        id: 201,
        title: this.title,
        completed: false,
      };
      this.addTodo(newTodo);
    },
    handleDblClick(todo) {
      const updTodo = {
        title: todo.title,
        completed: !todo.completed,
        id: todo.id,
      };
      this.updateTodo(updTodo);
    },
  },
  mounted() {
    this.handleGetTodos();
  },
};
</script>

<style scoped>
.todos-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.todo-wrapper {
  position: relative;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 27%, #b721ff 99%);
  width: 300px;
  padding: 15px 46px 8px 10px;
  text-transform: capitalize;
  overflow: hidden;
  margin: 10px 0;
  box-shadow: 0px 4px 8px 2px #b6b6b6;
  color: #fff;
  border-radius: 5px;
}
.todos-wrapper .span1 {
  position: absolute;
  right: 10px;
  top: 10px;
  background: #fff;
  color: #000;
  font-size: 13px;
  padding: 4px 6px;
  border-radius: 30px;
}
.todos-wrapper .span2 {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: red;
  cursor: pointer;
  font-size: 11px;
  border-radius: 100px;
  padding: 4px 6px;
  border: 1px solid #fff;
}
</style>
