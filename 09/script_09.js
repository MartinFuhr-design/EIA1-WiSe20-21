//Load Button 
document.querySelector("#clear").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
//Sumbit data function
loadEvents();
function loadEvents() {
    document.querySelector("form").addEventListener("submit", submitToDo);
}
function submitToDo(e) {
    e.preventDefault();
    var input = document.querySelector("input");
    if (input.value != "")
        addToDo(input.value);
    input.value = "";
}
//add / delete ToDO
var countminus = document.getElementsByClassName("deletetodo");
var countplus = document.getElementsByClassName("newtodo");
function addToDo(task) {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = "<span class=\"deletetodo\"><i class=\"far delete fa-trash-alt\"></span></i><input class=\"newtodo\" type=\"checkbox\"><label class=\"nameElement\">" + task + "</label>";
    ul.appendChild(li);
    li.querySelector(".deletetodo").addEventListener("click", deleteToDo);
    for (var i = 0; i < countplus.length; i++) {
        countplus[i].addEventListener("submit", submitToDo);
    }
    for (var i = 0; i < countplus.length; i++) {
        countminus[i].addEventListener("click", deleteToDo);
    }
    ToDonumber();
}
function ToDonumber() {
    document.querySelector(".counter").innerHTML = countplus.length + " in total";
}
// Delete all toDO
function deleteToDo() {
    this.parentElement.remove();
    ToDonumber();
}
//# sourceMappingURL=script_09.js.map