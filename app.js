const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// calling load eventlistner
loadEventListener();

// creating loadEventListener fuction

function loadEventListener() {
  //add task
  form.addEventListener("submit", addTask);
  //remove task
  taskList.addEventListener("click", removeTask);
  // clear tasks
  clearBtn.addEventListener("click", clearTask);
  //filter tasks

  filter.addEventListener("keyup", filterTask);
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

// create removeTask function

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// create clear task function

function clearTask() {
  //with innerHTML
  //   taskList.innerHTML = "";

  //with removeChild

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
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
