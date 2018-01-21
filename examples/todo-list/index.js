var todoItem = {
  props: ['title', 'complete'],
  template: '<li>{{ `${title} - ${complete}` }}</li>'
}

var child = {
  props: ['text'],
  template: '<span>{{ text }}</span>'
}

new Vue({
  el: '#app',
  data: {
    title: 'Vue Todo List',
    parentText: 'parent',
    count: 0,
  },
  components: {
    'todo-item': todoItem,
    'child' : child
  }
})