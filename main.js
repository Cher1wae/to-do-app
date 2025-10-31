// 1️⃣ Get all tasks previously saved in localStorage (if any)
const tasks = JSON.parse(localStorage.getItem("myTasks"));
// 2️⃣ Create a fresh empty array to hold our tasks in memory
const myTasks = [];
// 3️⃣ If tasks exist in localStorage, push each one into our working array
if (tasks) {
    tasks.forEach(t => myTasks.push(t));
} else {
    console.error("An err occured while fetching tasks from local storage");
}

// 4️⃣ DOM references for all major elements
const parent = document.querySelector(".app-container");
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskItems = document.querySelectorAll(".task-item");

// 5️⃣ Function that displays all tasks on screen (renders the list)
function displayTasks(tasks) {
    // making the ul empty or bak to default for rerendering of li or the empty message.
    list.innerHTML = tasks.length > 0 ? "" : `<p id="emptyMessage">Add a task for it to be displayed here!</p>`;
    tasks.forEach((t, i) => createTask(t, i));
}
// 6️⃣ Initial rendering of all stored tasks when page loads
displayTasks(myTasks)

// 7️⃣ Listen for typing in the input field
input.addEventListener("input", () => {
    if (input.value.trim().length == 0) {
        addButton.disabled = true;
        return;
    } else {
        addButton.disabled = false;
    }
});

// 8️⃣ Handle Add Task button click
addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText.length == 0) {
        console.log("input is required!!")
        return;
    }

    // Generate current date/time string
    const date = new Date();
    const currentDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    // Create a task object with default buttons and text
    const taskObject = {
        name: taskText,
        date: currentDate,
        isCompleted: false,
        deleteBtn: "delete",
    }

    // Add the new task to our array and update localStorage
    myTasks.push(taskObject);
    localStorage.setItem("myTasks", JSON.stringify(myTasks))

    //checking if the empty message is displayed and making it not to 
    //so you do not have the empty message displaying while a list is also displayed

    // Hide the empty message if it’s showing
    let empMessage = document.getElementById("emptyMessage")
    if (empMessage) empMessage.style.display = "none"

    // Create a new task visually
    createTask(taskObject, myTasks.length - 1);

    // resetting the btn and the input to default state
    input.value = "";
    addButton.disabled = true;
});

// 9️⃣ Function to build and append each individual task in the list
function createTask(newTask, index) {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    newTask.isCompleted ? li.classList.add("completed", "task-item") : li.classList.add("task-item");

    const div1 = document.createElement("div");
    div1.classList.add("task-content");
    const span1 = document.createElement("span");
    span1.textContent = newTask.name;
    const span2 = document.createElement("span");
    span2.classList.add("task-date");
    span2.textContent = "Added: " + newTask.date;
    div1.append(span1)
    div1.append(span2)

    const div2 = document.createElement("div");
    div2.classList.add("task-buttons");
    const btn1 = document.createElement("button");
    btn1.classList.add("complete-btn");
    btn1.textContent = "complete";
    const btn2 = document.createElement("button");
    btn2.classList.add("delete-btn");
    btn2.textContent = newTask.deleteBtn;

    // Attach click listeners for complete and delete
    createEvent(btn1, "complete");
    createEvent(btn2, "delete");

    div2.append(btn1);
    div2.append(btn2);
    li.append(div1)
    li.append(div2)
    list.append(li)
}

// 🔟 Function that attaches event listeners to buttons
function createEvent(element, act) {
    element.addEventListener("click", (e) => action(act, e))
}
// 11 Handles the logic when complete/delete buttons are clicked
function action(action = "btn clicked!!", event) {
    let parentLi = event.target.closest("li");
    let listIndex = Number(parentLi.dataset.index);
    if (action == "delete") {
        // Remove that task from array
        myTasks.splice(listIndex, 1);
        // Update localStorage
        localStorage.setItem("myTasks", JSON.stringify(myTasks));
        // Re-render the tasks after deletion
        // let dText = parentLi.childNodes[0].childNodes[0].textContent;
        let dText = parentLi.querySelector(".task-content > span").textContent;
        displayTasks(myTasks)
        parentLi.remove();
        popUp(`${dText} has been removed!!`)
    } else if (action == "complete") {
        myTasks[listIndex].isCompleted = true;
        console.log(myTasks[listIndex]);
        // Update localStorage to reflect complete state
        localStorage.setItem("myTasks", JSON.stringify(myTasks));
        // update the ui state
        parentLi.classList.add("completed");
        popUp("Task completed!");

        emailjs.send("service_7thkajr", "template_s6aveq2", {
            email: "hey.cheriwae@gmail.com"
        });
    } else {
        console.log(action + ": action is not recognnised!!");
    }
}

function popUp(titleText) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: titleText,
        showConfirmButton: false,
        timer: 1500
    });
}


