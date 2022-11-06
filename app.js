const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: false,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: false,
    body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non.",
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.",
  },
];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    },
  };

  let lastSelectedTheme = "default";

  //? Elements UI

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const card = document.querySelector(".form-section .card");
  const form = document.forms["addTask"];
  const titleInput = form.elements["title"];
  const bodyInput = form.elements["body"];
  const themeSelect = document.getElementById("themeSelect");

  //? Events

  form.addEventListener("submit", оnFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);
  listContainer.addEventListener("click", onCompleteHandler);
  themeSelect.addEventListener("change", onThemeSelectHandler);

  renderAllTasks(objOfTasks);

  const taskListEmptyMessage = messageTemplate();
  onTasksListEpty(arrOfTasks);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.log("Список пуст!");
      return;
    }

    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemlate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }
  function listItemTemlate({ _id, title, body, completed } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);
    if (completed) {
      li.style.backgroundColor = "grey";
    }

    const span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.textContent = title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete task";
    deleteButton.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    const copletedBtn = document.createElement("button");
    copletedBtn.textContent = "Completed";
    copletedBtn.style.backgroundColor = "green";
    copletedBtn.style.color = "white";
    copletedBtn.classList.add("btn", "completed-btn");

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(article);
    li.appendChild(copletedBtn);
    return li;
  }
  function оnFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = titleInput.value;
    const bodyValue = bodyInput.value;

    if (!titleValue || !bodyValue) {
      alert("Введите данные задачи!");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const taskItem = listItemTemlate(task);
    listContainer.insertAdjacentElement("afterbegin", taskItem);
    form.reset();
    onTasksListEpty(objOfTasks);
  }
  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task- ${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }
  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Точно хотите удалить задачу: ${title}`);
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }
  function deleteTaskFromHtml(confirmed, elem) {
    if (!confirmed) return;
    elem.remove();
  }
  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.getAttribute("data-task-id");
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
      onTasksListEpty(objOfTasks);
    }
  }
  function messageTemplate() {
    const paragraph = document.createElement("p");
    paragraph.style.fontWeight = "500";
    paragraph.classList.add("paragraph");
    paragraph.textContent = "Cписок пуст, добавьте новую задачу...";
    card.insertAdjacentElement("afterend", paragraph);
    return paragraph;
  }
  function onTasksListEpty(tasksList) {
    if (Object.values(tasksList).length === 0 || tasksList.length === 0) {
      taskListEmptyMessage.style.display = "block";
    } else {
      taskListEmptyMessage.style.display = "none";
    }
  }
  function changeComletedProp(id) {
    if (objOfTasks[id]) {
      objOfTasks[id].completed = true;
    }
  }
  function changeColorOnCompleted(elem) {
    elem.style.backgroundColor = "grey";
  }
  function onCompleteHandler({ target }) {
    if (target.classList.contains("completed-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.getAttribute("data-task-id");
      changeComletedProp(id);
      changeColorOnCompleted(parent);
    }
  }
  function onThemeSelectHandler(e) {
    const selectedTheme = themeSelect.value;
    const isConfermed = confirm(
      `Вы действительно хотите изменить тему: ${selectedTheme}`
    );
    if (!isConfermed) {
      themeSelect.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
  }
  function setTheme(name) {
    const selectedThemeObj = themes[name];
    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
