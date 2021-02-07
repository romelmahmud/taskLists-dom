const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// calling load eventlistner
loadEventListener();

// creating loadEventListener fuction

function loadEventListener() {
  //DOM event lisetener
  document.addEventListener("DOMContentLoaded", getTasks);
  //add task
  form.addEventListener("submit", addTask);
  //remove task
  taskList.addEventListener("click", removeTask);
  // clear tasks
  clearBtn.addEventListener("click", clearTask);
  //filter tasks

  filter.addEventListener("keyup", filterTask);
}

// creating get task fuction

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // create li eleent
    const li = document.createElement("li");
    // adding class
    li.className = "collection-item";
    // creating and appendng textNode
    li.appendChild(document.createTextNode(task));

    // creating link createElement
    const link = document.createElement("a");
    //add class
    link.className = "delete-item   secondary-content";
    //add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li

    li.appendChild(link);

    // append li to ul

    taskList.appendChild(li);
  });
}

// creating addTask function

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }
  // create li element
  const li = document.createElement("li");
  // adding class
  li.className = "collection-item";
  // creating and appendng textNode
  li.appendChild(document.createTextNode(taskInput.value));

  // creating link createElement
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  //add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li

  li.appendChild(link);

  // append li to ul

  taskList.appendChild(li);

  // add task in the localStorage

  addTaskInLocalStorage(taskInput.value);

  // clearing input

  taskInput.value = "";

  e.preventDefault();
}
//creat addTaskInLocalStorage function

function addTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// create removeTask function

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }

  // removeTask from  localStorage
  removeTaskFromLocalStorage(e.target.parentElement.parentElement);
}

// creating removeTaskFromLocalStorage fuction

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// create clear task function

function clearTask() {
  //with innerHTML
  //   taskList.innerHTML = "";

  //with removeChild

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clearing all Task

  localStorage.clear();
}

// creating filter task function

function filterTask(e) {
  const text = e.target.value;

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
