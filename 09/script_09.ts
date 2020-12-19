//Load Button 
document.querySelector("#clear").addEventListener("click", function(): void {
    localStorage.clear(); 
    location.reload();
});

//Sumbit data function
loadEvents();
function loadEvents(): void {
  document.querySelector("form").addEventListener("submit", submitToDo);
}

function submitToDo(e: Event): void {
  e.preventDefault();
  let input: HTMLInputElement = document.querySelector("input");
  if (input.value != "")
    addToDo(input.value);
  input.value = "";
}

//add / delete ToDO
const countminus: HTMLCollection = document.getElementsByClassName("deletetodo");
const countplus: HTMLCollection = document.getElementsByClassName("newtodo");

function addToDo(task: string): void {
  let ul: HTMLUListElement = document.querySelector("ul");
  let li: HTMLLIElement = document.createElement("li");
  li.innerHTML = `<span class="deletetodo"><i class="far delete fa-trash-alt"></span></i><input class="newtodo" type="checkbox"><label class="nameElement">${task}</label>`;
  ul.appendChild(li);
  li.querySelector(".deletetodo").addEventListener("click", deleteToDo);

  for (let i: number = 0; i < countplus.length; i ++) { 
    countplus[i].addEventListener("submit", submitToDo);
  }
  for (let i: number = 0; i < countplus.length; i ++) { 
    countminus[i].addEventListener("click", deleteToDo);
  }
  ToDonumber();
}

function ToDonumber(): void {
  document.querySelector(".counter").innerHTML = countplus.length + " in total"; 
}

// Delete all toDO
function deleteToDo(): void {
  this.parentElement.remove(); 
  ToDonumber();
}