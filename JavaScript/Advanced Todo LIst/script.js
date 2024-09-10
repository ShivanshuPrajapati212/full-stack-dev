const form = document.getElementById("todo-form");
const todo_title = document.getElementById("todo-title");
const todo_desc = document.getElementById("todo-desc");
const todo_deadline = document.getElementById("todo-deadline");
const todo_priority = document.getElementById("todo-priority");
const todo_container = document.getElementsByClassName("todo-container")[0];

const resetTodo = () => {
  todo_container.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    todo_container.innerHTML += `
        <div class="card text-center my-4">
      <div class="card-header">
      ${localStorage.getItem(localStorage.key(i)).split(",")[2]}
      </div>
      <div class="card-body">
        <h5 class="card-title">${localStorage.key(i)}</h5>
        <p class="card-text">${
          localStorage.getItem(localStorage.key(i)).split(",")[0]
        }</p>
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
      <div class="card-footer text-body-secondary">
      ${localStorage.getItem(localStorage.key(i)).split(",")[1]}
      </div>
    </div>
        `;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = todo_title.value;
  const description = todo_desc.value;
  const deadline = todo_deadline.value;
  const priority = todo_priority.value;

  localStorage.setItem(title, [description, deadline, priority]);

  resetTodo();
});

for (let i = 0; i < localStorage.length; i++) {
  todo_container.innerHTML += `
    <div class="card text-center my-4">
  <div class="card-header">
  ${localStorage.getItem(localStorage.key(i)).split(",")[2]}
  </div>
  <div class="card-body">
    <h5 class="card-title">${localStorage.key(i)}</h5>
    <p class="card-text">${
      localStorage.getItem(localStorage.key(i)).split(",")[0]
    }</p>
    <a href="#" class="btn btn-primary" id="${localStorage.key(i)}">Delete</a>
  </div>
  <div class="card-footer text-body-secondary">
  ${localStorage.getItem(localStorage.key(i)).split(",")[1]}
  </div>
</div>
    `;
}

for (let i = 0; i < localStorage.length; i++) {
  delete_btn = document.getElementById(localStorage.key(i));
  delete_btn.addEventListener("click", () => {
    localStorage.removeItem(localStorage.key(i));
    resetTodo();
  });
}
