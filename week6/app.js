// variable declartions

let body = document.querySelector("body");
let addTaskBtn = document.querySelector(".add-btn");
let taskForm = document.querySelector(".addTask");
let Tname = document.querySelector("#Tname");
let add = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// function that shows interface to add tasks

let showAddTask = () => {
  taskForm.classList.add("showAddTask");
  addTaskBtn.style.display = "none";
};

// function which takes task name as input

let taskAdded = () => {
  if (Tname.value === "") return;
  taskForm.classList.remove("showAddTask");
  addTaskBtn.style.display = "block";
  taskForm.classList.remove("showAddTask");
  addTaskBtn.style.display = "block";
  tasksDiv.classList.add("showTasks");

  let taskData = {
    taskName: Tname.value,
  };

  return taskData.taskName;
};

// function which displays the added tasks

let displayTasks = (t) => {
  console.log(t);
  let task = document.createElement("div");
  let doneTask = document.createElement("button");
  let deleteTask = document.createElement("button");
  let taskName = document.createElement("p");
  task.append(taskName);
  task.append(doneTask, deleteTask);
  tasksDiv.append(task);
  task.classList.add("taskBox");
  doneTask.innerHTML = "done";
  deleteTask.innerHTML = "delete";

  localStorage.setItem(t, t);
  taskName.innerHTML = `${localStorage.getItem(t)}`;

  doneTask.addEventListener("click", () => {
    taskName.classList.toggle("active");
  });

  deleteTask.addEventListener("click", () => {
    localStorage.removeItem(t);
    task.remove();
    if (tasksDiv.childNodes.length === 0) {
      tasksDiv.classList.remove("showTasks");
    }
  });
};

// event listeners

addTaskBtn.addEventListener("click", showAddTask);
add.addEventListener("click", () => {
  displayTasks(taskAdded());
});
