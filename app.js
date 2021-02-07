const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// calling load eventlistner
loadEventListener();

// creating loadEventListener fuction

function loadEventListener() {
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
}

// creating addTask function

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }
  // create li eleent
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

  // clearing input

  taskInput.value = "";

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
