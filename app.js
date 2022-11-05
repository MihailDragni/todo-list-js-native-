const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
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
    completed: true,
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

  //? Elements UI

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );
  const card = document.querySelector(".form-section .card");
  const form = document.forms["addTask"];
  const titleInput = form.elements["title"];
  const bodyInput = form.elements["body"];

  //? Events

  form.addEventListener("submit", оnFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);

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
  function listItemTemlate({ _id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.style.fontWeight = "bold";
    span.textContent = title;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete task";
    deleteButton.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100");

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(article);
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
      computed: false,
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
})(tasks);
