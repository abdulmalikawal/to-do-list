document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    // Function to create a new task item
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        return li;
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = createTaskElement(taskText);
            taskList.appendChild(newTask);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Add task when addButton is clicked
    addButton.addEventListener("click", addTask);

    // Optional: You can also allow pressing Enter to add a task
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});




