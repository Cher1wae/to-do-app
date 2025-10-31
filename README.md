# 📝 To-Do List App

A simple, responsive to-do list web app that allows users to add, complete, and remove tasks. Tasks are automatically saved in **local storage**, ensuring your list remains intact even after refreshing or closing the browser.

---

## 🚀 Live Demo

Try it here 👉 [cher1wae.github.io/to-do-app](https://cher1wae.github.io/to-do-app/)

---

## 📋 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [How It Works](#how-it-works)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
* [Project Structure](#project-structure)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## 🧠 Overview

This project is a **To-Do List** app built using HTML, CSS, and JavaScript.
It enables users to manage their daily tasks efficiently with an intuitive interface. Users can:

* Add new tasks,
* Mark them as completed (tasks get crossed out),
* Automatically remove completed tasks,
* Persist their task list using **local storage**, ensuring no data loss on refresh.

---

## ✨ Features

✅ Add new tasks through an input field.
✅ “Add Task” button becomes **disabled** when the input field is empty or a task is already entered.
✅ Click on a task to **mark it as completed** (crossed out visually).
✅ Completed tasks are automatically **removed from the page** after being crossed out.
✅ All tasks are **stored in local storage**, so your list remains even after a page refresh or browser restart.
✅ Minimalist, responsive user interface.

---

## 🧩 How It Works

1. Type your task into the input field.
2. Click the **Add Task** button (enabled only when text is entered).
3. Your new task appears in the task list.
4. When you click a task, it’s marked as **completed** and removed after a short delay.
5. The updated list is automatically synced with **local storage**, ensuring your tasks persist across sessions.

---

## 🛠️ Getting Started

### Prerequisites

You only need a **modern web browser** (Chrome, Firefox, Edge, or Safari).
For local testing, you can optionally use a simple HTTP server such as `live-server` or `http-server`.

### Installation

To run it locally:

```bash
git clone https://github.com/cher1wae/to-do-app.git
cd to-do-app
```

### Usage

Open the app by running one of the following:

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server
npx http-server .
```

Then visit `http://localhost:8080/` (or your local port) to view the app.

---

## 📂 Project Structure

```
to-do-app/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # App styling
├── js/
│   └── script.js       # App logic (task handling, local storage)
├── assets/             # Icons or other static assets (if any)
└── README.md           # Project documentation
```

---

## 🧰 Technologies Used

* **HTML5** – Structure of the app
* **CSS3** – Layout and styling
* **JavaScript (ES6+)** – App logic and local storage handling
* **Local Storage API** – Persistent task storage

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project:

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add a new feature"
   ```
4. Push to your branch and open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it.

```
MIT License  
© 2025 cher1wae  
```

---

## 📬 Contact

* **GitHub:** [@cher1wae](https://github.com/cher1wae)
* **Project Demo:** [cher1wae.github.io/to-do-app](https://cher1wae.github.io/to-do-app/)

