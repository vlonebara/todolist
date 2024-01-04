const input = document.getElementById("input");
const list = document.getElementById("list");

function addTask() {
  if (input.value === "") {
    alert("write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  dataSave();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      dataSave();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      dataSave();
    }
  },
  false
);

function dataSave() {
  localStorage.setItem("data", list.innerHTML);
}

function dataLoad() {
  list.innerHTML = localStorage.getItem("data");
}

dataLoad();
