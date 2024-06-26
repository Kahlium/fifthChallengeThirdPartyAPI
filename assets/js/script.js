//STARTER CODE
// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

//Variables
const taskName = document.getElementById('taskName')
const taskDate = document.getElementById('taskDate')
const taskDescription = document.getElementById('taskDescription')
const submitButton = document.getElementById('submitButton')


//Functions
// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (nextId === null)
    {
        nextId = 1;
        localStorage.setItem("nextId", JSON.stringify(nextId))
    } else
    {
        nextId++;
        localStorage.setItem("nextId", JSON.stringify(nextId))
    }
    console.log(nextId)
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const cardButton = document.createElement("button");
  
    taskCard.setAttribute("class", "card");
    cardBody.setAttribute("class", "card-body");
    cardTitle.setAttribute("class", "card-title")
    cardTitle.innerText = task.taskName;
    cardText.setAttribute("class", "card-text");
    cardText.innerText = task.taskDescription;
    cardButton.setAttribute("class", "btn btn-primary");
    cardButton.innerText = "Delete";

    taskCard.append(cardBody)
    cardBody.append(cardTitle, cardText, cardButton)

    //Make cards draggable
    //Once dragged to another status row, update status on the task.status

    return taskCard
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const todoCards = document.getElementById("todo-cards");

    for (let task of taskList)
    {
        //Add an if for every status: todo, in progress and done
        const taskCard = createTaskCard(task)
        todoCards.append(taskCard)
    }

    console.log('renderTaskList')

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    
    let currentTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
    const newTask = 
    {
        taskId: generateTaskId(),
        taskName: taskName.value,
        taskDate: taskDate.value,
        taskDescription: taskDescription.value,
        status: 'to-do'
    };
    
    if (taskName.value === "" || taskDate.value === "" || taskDescription.value === "")
    {
        return;
    } else
    {
        currentTasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(currentTasks));
        console.log(newTask)
        createTaskCard(newTask);
    }
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, 
// and make the due date field a date picker
$(document).ready(function () {
    renderTaskList();

});

submitButton.addEventListener('click', handleAddTask);