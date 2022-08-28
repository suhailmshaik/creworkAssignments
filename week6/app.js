let body = document.querySelector("body");
let addTaskBtn = document.querySelector(".add-btn");
let taskForm = document.querySelector(".addTask");
let Tname = document.querySelector("#Tname");
let Tdesc = document.querySelector("#Tdesc");
let add = document.querySelector(".add");
let tasks = [];

let showAddTask = () => {
  taskForm.classList.add("showAddTask");
  addTaskBtn.style.display = "none";
};

let taskAdded = () => {
  taskForm.classList.remove("showAddTask");
  addTaskBtn.style.display = "block";
  if (Tname.value === "" && Tdesc.value === "") return;
  taskForm.classList.remove("showAddTask");
  addTaskBtn.style.display = "block";

  let taskData = {
    taskName: Tname.value,
    taskDescription: Tdesc.value,
  };

  tasks.push(taskData);
  Tname.value = "";
  Tdesc.value = "";
  console.log(tasks);
};

add.addEventListener("click", taskAdded);
addTaskBtn.addEventListener("click", showAddTask);
