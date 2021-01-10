// Setting up Interface
//Example ToDos as objects at Start of website
var toDOint = [{
        todosText: "Lorem",
        todosChecked: true
    }, {
        todosText: "Ipsum",
        todosChecked: false
    }, {
        todosText: "Dolor",
        todosChecked: false
    }];
//Declaration of variables for DOM-Elements
var inputDOMElement;
var outputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var doneDOMElement;
var openDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    outputDOMElement = document.querySelector("#output");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    doneDOMElement = document.querySelector("#done");
    openDOMElement = document.querySelector("#open");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + toDOint[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + toDOint[index].todosText + "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < toDOint.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
//Function for Updating the counter of ToDo List
function updateCounter() {
    counterDOMElement.innerHTML = toDOint.length + " in total";
    //ToDo Done or Open
    var counterOpen = 0;
    var counterDone = 0;
    for (var i = 0; i < toDOint.length; i++) {
        if (toDOint[i].todosChecked == false) {
            counterOpen++;
        }
        else {
            counterDone++;
        }
        doneDOMElement.innerHTML = counterDone + " done";
        openDOMElement.innerHTML = counterOpen + " open";
    }
}
// Function for creating new ToDo, putting new ToDo at beginning of list
function addTodo() {
    if (inputDOMElement.value != "") {
        toDOint.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
// Function Delete ToDo
function deleteTodo(index) {
    toDOint.splice(index, 1);
    drawListToDOM();
}
// Function for state of ToDo: Check/Unchecked
function toggleCheckState(index) {
    toDOint[index].todosChecked = !toDOint[index].todosChecked;
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["add ToDo"],
        smart: true,
        action: function (i, wildcard) {
            toDOint.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
            console.log("New ToDo:" + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    function stopContinuousArtyom() {
        artyom.fatality();
    }
    document.querySelector("#start").addEventListener("click", startContinuousArtyom);
    document.querySelector("#stop").addEventListener("click", stopContinuousArtyom);
});
//# sourceMappingURL=Script_010.js.map