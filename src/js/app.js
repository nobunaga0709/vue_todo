import Vue from 'vue'

// todoリスト作成工程
// 1. 機能構想(1h) 10m
// 2. ワイヤーフレーム作成(1h) 10m
// 3. デザイン作成(3h) 2h
// 4. コーディング(16h) 4h10m
// 5. サーバーアップ(1h) 
// 合計22h

new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: '',
    uniqueKey: 0,
    searchText: ''
  },
  methods: {
    addTask: function () {
      if (this.newTodo){
        this.todos.push({
        id: ++this.uniqueKey,
        title: this.newTodo,
        isDone: false,
        editFlg: false,
        isView: true
      })}
      return this.newTodo='';
    },
    removeTask: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    doneTask: function (todo) {
      todo.isDone = !todo.isDone;
    },
    filterCollection: function (el) {
      const regexp = new RegExp('^' + this.searchText, 'i');
      return (el.title.match(regexp));
    },
    editTask: function (todo) {
      todo.editFlg = true;
    },
    renewTodo: function (todo) {
      todo.editFlg = false;
    }
  },
  computed: {
    computedTodos: function () {
      return this.todos.filter(this.filterCollection);
    }
  }
})
