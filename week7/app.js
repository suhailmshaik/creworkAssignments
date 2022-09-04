// variable declarations

let input = document.querySelector("input");
let addBtn = document.querySelector(".add-btn");
let taskDiv = document.querySelector(".tasks-div");
let quote = document.querySelector(".quotes");

// function to get user input

let getTask = () => {
  let Tname = input.value;
  input.value = "";
  return Tname;
};

// function to add tasks

let addTasks = (t) => {
  if (t == "") return;
  let task = document.createElement("div");
  let doneTask = document.createElement("button");
  let deleteTask = document.createElement("button");
  let taskName = document.createElement("p");
  task.append(taskName, doneTask, deleteTask);
  taskDiv.append(task);
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
  });
};

let n = Math.floor(Math.random() * 500 + 1);

// function to fetch quotes and author name from quotes API

let getQuote = () => {
  axios
    .get("https://type.fit/api/quotes")
    .then((res) => {
      quote.innerHTML = `${res.data[n].text} <br> <br> - ${res.data[n].author}`;
    })
    .catch((err) => console.error(err));
};

getQuote();

addBtn.addEventListener("click", () => {
  addTasks(getTask());
});
