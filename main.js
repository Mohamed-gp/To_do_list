let add = document.querySelector(".add");
let input = document.querySelector("input");
let tasks = document.querySelector(".tasks");

if (localStorage.keep != null && localStorage.keep != "undefined") {
  tasks.innerHTML = "";
  tasks.innerHTML = localStorage.keep;
}
add.onclick = function (e) {
  e.preventDefault();
  if (input.value != "") {
    let newTask = document.createElement("p");
    newTask.textContent = input.value;
    newTask.setAttribute("class", "task");
    let newRemove = document.createElement("span");
    newRemove.setAttribute("class", "remove");
    let removeIcon = document.createElement("i");
    removeIcon.setAttribute("class", "fa-solid fa-xmark");
    newRemove.append(removeIcon);
    newTask.append(newRemove);
    tasks.append(newTask);
    input.value = "";
    localStorage.keep = undefined;
    for (let i = 0; i < tasks.children.length; i++) {
      if (localStorage.keep == "undefined") {
        localStorage.keep = tasks.children[i].outerHTML;
      } else if (localStorage.keep == "undefined") {
        localStorage.keep = localStorage.keep;
      } else {
        localStorage.keep = localStorage.keep + tasks.children[i].outerHTML;
      }
    }
  }
};

setInterval(function () {
  let remove = document.querySelectorAll(".remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      remove[i].parentElement.remove();
      localStorage.keep = undefined;
      for (let i = 0; i < tasks.children.length; i++) {
        if (localStorage.keep == "undefined") {
          localStorage.keep = tasks.children[i].outerHTML;
        } else if (localStorage.keep == "undefined") {
          localStorage.keep = localStorage.keep;
        } else {
          localStorage.keep = localStorage.keep + tasks.children[i].outerHTML;
        }
      }
    });
  }
}, 1);
