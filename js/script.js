var app = new Vue({
  el: "#root",
  data: {
    toDoList: [
      {
        text: "Creare file progetto",
        completed: false,
      },
      {
        text: "pushare esercizio su GitHub",
        completed: false,
      },
      {
        text: "Correggere esercizio",
        completed: false,
      },
      {
        text: "Sistemare file CSS pagina",
        completed: false,
      },
      {
        text: "pushare modifiche su GitHub",
        completed: false,
      },
    ],
    toDoDoing: [],
    toDoItem: "",
    alertMessage: "Inserimento non consentito!\nScrivi un nuovo To-Do da aggiungere in elenco"
  },
  methods: {
    checkToDo: function (str) {
      return str.trim().length > 0;
    },
    addToDo: function () {
      let list = this.toDoList;
      let newToDo = this.toDoItem;
      this.checkToDo(newToDo) ? list.push({ text: newToDo, completed: false }) : alert(this.alertMessage);
      this.toDoItem = "";
    },
    removeToDo: function (index) {
      let removed = this.toDoList.splice(index, 1);
      this.toDoDoing.push(removed[0]);
    },
    completedToDo: function (index) {
      let element = this.toDoList[index];
      element.completed ? element.completed = false : element.completed = true;
      // this.toDoList[index].completed ? this.toDoList[index].completed = false : this.toDoList[index].completed = true;
    },
  },
});
