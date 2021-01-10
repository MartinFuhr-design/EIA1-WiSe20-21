// Setting up Interface

interface ToDo {
    todosText: string;
    todosChecked: boolean;
}

//Example ToDos as objects at Start of website

var toDOint: ToDo[] = [{
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

var inputDOMElement: HTMLInputElement;
var outputDOMElement: HTMLSpanElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var openDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
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

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < toDOint.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML =  "<span class='check " + toDOint[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + toDOint[index].todosText + "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
//Function for Updating the counter of ToDo List

function updateCounter(): void {
    counterDOMElement.innerHTML = toDOint.length + " in total";

//ToDo Done or Open

    let counterOpen: number = 0;
    let counterDone: number = 0;
    for (let i: number = 0; i < toDOint.length; i++) {
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

function addTodo(): void {
    if (inputDOMElement.value != "") {
        toDOint.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false});
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

// Function Delete ToDo

function deleteTodo(index: number): void {
    toDOint.splice(index, 1);
    drawListToDOM();
}

// Function for state of ToDo: Check/Unchecked

function toggleCheckState(index: number): void {
    toDOint[index].todosChecked = !toDOint[index].todosChecked;
    drawListToDOM();
}


// Artyom (voice control)

declare var Artyom: any; 

window.addEventListener("load", function(): void {
    var artyom: any = new Artyom(); 
    
    artyom.addCommands({
        indexes: ["add ToDo"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            toDOint.unshift({
                todosText: wildcard,
                todosChecked: false});
            drawListToDOM();
            console.log("New ToDo:" + wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    function stopContinuousArtyom(): void {
        artyom.fatality();
    }

    document.querySelector("#start").addEventListener("click", startContinuousArtyom);
    document.querySelector("#stop").addEventListener("click", stopContinuousArtyom);
});