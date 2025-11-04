
const tasks = JSON.parse(localStorage.getItem("myTasks"));
const myTasks = [];
if (tasks) {
    tasks.forEach(t => myTasks.push(t));
} else {
    console.error("An err occured while fetching tasks from local storage");
}

const parent = document.querySelector(".app-container");
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskItems = document.querySelectorAll(".task-item");

function displayTasks(tasks) {
    list.innerHTML = tasks.length > 0 ? "" : `<p id="emptyMessage">Add a task for it to be displayed here!</p>`;
    tasks.forEach((t, i) => createTask(t, i));
}

displayTasks(myTasks)

input.addEventListener("input", () => {
    if (input.value.trim().length == 0) {
        addButton.disabled = true;
        return;
    } else {
        addButton.disabled = false;
    }
});

addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText.length == 0) {
        console.log("input is required!!")
        return;
    }

    const date = new Date();
    const currentDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });

    const taskObject = {
        name: taskText,
        date: currentDate,
        isCompleted: false,
        deleteBtn: "delete",
    }

    myTasks.push(taskObject);
    localStorage.setItem("myTasks", JSON.stringify(myTasks))

    let empMessage = document.getElementById("emptyMessage")
    if (empMessage) empMessage.style.display = "none"

    createTask(taskObject, myTasks.length - 1);

    input.value = "";
    addButton.disabled = true;
});

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

    createEvent(btn1, "complete");
    createEvent(btn2, "delete");

    div2.append(btn1);
    div2.append(btn2);
    li.append(div1)
    li.append(div2)
    list.append(li)
}

function createEvent(element, act) {
    element.addEventListener("click", (e) => action(act, e))
}

function action(action = "btn clicked!!", event) {
    let parentLi = event.target.closest("li");
    let listIndex = Number(parentLi.dataset.index);
    if (action == "delete") {
        myTasks.splice(listIndex, 1);

        localStorage.setItem("myTasks", JSON.stringify(myTasks));

        let dText = parentLi.querySelector(".task-content > span").textContent;
        displayTasks(myTasks)
        parentLi.remove();
        popUp(`${dText} has been removed!!`)
    } else if (action == "complete") {
        myTasks[listIndex].isCompleted = true;
        console.log(myTasks[listIndex]);

        localStorage.setItem("myTasks", JSON.stringify(myTasks));

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


