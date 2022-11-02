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
  //? 1.Переводим массив задач, в объект объектов(где id это ключь), для того что бы было удобнне работать.

  //? 2.Создаем функцию для вывода задачь на экран(renderAllTasks). ПРоверяем передан ли список задачь. Создадим фрагмент, который наполним задачами, после добавим фрагмент на экран. Перебираем задачи через Object.values и создаем для каждой задачи дом разметку. На каждой итерации вызываем функцию для зоздания разметки и передаем ее переменной.

  //? 3. Объявляем отдельную функцию (listItemTemlate) для создания одного дом элемента. Разметку для одной задачи! Функция получает одну задачу, то есть один объект(в аргументах можно деструктруировать необходимые данные в переменные)

  //? 4. После получения разметки нам нужно добавить их во фрагмент.

  //? 5. Найти список(контэйнер) куда будут добовляться задачи. После чего добавить в него наш фрагмент.

  //? 6. Для ввода и добавления задачь на страницу, нам нужно для начала найти форму и его инпуты. Ищем форму через document.forms['name']. В нем хранится коллекция всех форм. Дальше находим инпуты через form.elements['name'](можно искать по name или по id)

  //? 7. Повесить на форму событие submit, при срабатывании которой выполнить нужные действия(добавления задачи на страницу). Для этого создадим функцию обработчик события оnFormSubmitHandler. Сразу отменим поведение по дефолту для события submit. Получим значения передданные в инпутах в переменные, с помощью input.value. Сделать проверку на пустые строки в инпутах, вывести сообщения в alert в случае отправки пустой строки, останавливаем функцию.

  //? 8. Объявляем ноаую функцию createNewTask которая будет принимать данные от инпутов и будет создавать новый объект задачи и будет добавлять в список задач. Функцию вызовем из обработчика submit. Функция будет создавать новый объект, в которую будут переданы данные из аргументов, по умолчанию completed: false, и _id, который будет сгенерирован через Math.random. Дальше добавляем новый объект задачь в список задачь, список[новыяЗадача._id] = новыяЗадача. Для будущего использования возвращем копию нового объекта.

  //? 9. Вызовем функцию для создания дом разметки в обработчике события формы и передадим ей наш новый объект, для генерации разметки для новой задачи. Результат присвоим в переменную.

  //? 10. Добавляем новую задачу с дом разметкой в список(контэйнер) listContainer, где отрисовываются все задачи, при помощи insertAdjacentElement('afterbegin', новаяЗадача)

  //? 11. Очищаеи форму после добавления задачи, для этого в обработчике формы вызовем метод у формы form.reset()

  //? 12. Для удаления задачи, вешаем слушатель на контэйнер, который присутствует с самого начала в доме, и объявляем функцию обработчик onDeleteHandler

  //? 13. В оработчике события делаем проверку, если  у кликнутого элемента есть класс delete-btn то тогда выполняем определенные действия

  //? 14. В шапблоне listTanmplate для созданной лишки навешиваем атрибут дата, data-task-id со значение _id

  //? 15. В обработчике удаления задачи при клике ищем ближайшего родителя с атрибутом  ('[data-task-id]'), после чего у родителя берем значение id через dataset.taskId и присваиваем в переменную id

  //? 16. Создаем функцию deleteTask будет принимать id Задачи которую нужно удалить, будет спрашивать точно ли вы хотите удалить через функцию confirm и присвоить ответ в isConfirm, и эту функцию вызовем из нашего обработчика удаления задачи и передадим id

  //? 17. В функции deleteTask сделаем деструктуризацию из списка задач objOfTasks[id] достанем нужную информацию, в частности title и подставим его в confirm

  //? 18. Сделаем проверку если isConfirm  == false вернем isConfirm, иначе тоже вернем

  const objOfTasks = arrOfTasks.reduce((acc, elem) => {
    acc[elem._id] = elem;
    return acc;
  }, {});

  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  const form = document.forms["addTask"];
  const titleInput = form.elements["title"];
  const bodyInput = form.elements["body"];

  renderAllTasks(objOfTasks);
  form.addEventListener("submit", оnFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.console.error("Передайте список задач!");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((elem) => {
      const li = listItemTemlate(elem);
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
    span.textContent = title;
    span.style.fontWeight = "bold";

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
      alert("Введите данные!");
      return;
    }

    const item = createNewTask(titleValue, bodyValue);
    const li = listItemTemlate(item);
    listContainer.insertAdjacentElement("afterbegin", li);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random}`,
    };
    objOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(`Точно вы хотите удалить задачу: ${title}`);
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
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(parent, confirmed);
    }
  }
})(tasks);
