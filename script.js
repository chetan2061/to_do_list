document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("quick-task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = prompt("Enter your new task:");
    if (taskText && taskText.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `<label><input type="radio" name="task"> ${taskText}</label>`;
      taskList.appendChild(newTask);
    }
  });
});
