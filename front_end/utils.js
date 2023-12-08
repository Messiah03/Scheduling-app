window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const tm_exit_button = document.querySelector("#close-window");
	const task_manager = document.querySelector("#task-manager");

	const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

	savedTasks.forEach((task) => {
		const task_elemnt = document.createElement("div");
		task_elemnt.classList.add("task");

		const task_content_element = document.createElement("div");
		task_content_element.classList.add("content");
		task_elemnt.appendChild(task_content_element);

		const task_input_element = document.createElement("input");
		task_input_element.classList.add("text");
		task_input_element.type = "text";
		task_input_element.value = task;
		task_input_element.setAttribute("readonly", "readonly");
		task_content_element.appendChild(task_input_element);

		const task_button_element = document.createElement("div");
		task_button_element.classList.add("actions");

		const edit_button = document.createElement("button");
		edit_button.classList.add("edit");
		edit_button.innerHTML = "Edit";

		const delete_button = document.createElement("button");
		delete_button.classList.add("delete");
		delete_button.innerHTML = "Delete";

		task_button_element.appendChild(edit_button);
		task_button_element.appendChild(delete_button);
		task_elemnt.appendChild(task_button_element);

		list_el.appendChild(task_elemnt);

		edit_button.addEventListener("click", () => {
			if (edit_button.innerHTML.toLowerCase() == "edit") {
				task_input_element.removeAttribute("readonly");
				task_input_element.focus();
				edit_button.innerHTML = "Save";
			} else {
				task_input_element.setAttribute("readonly", "readonly");
				edit_button.innerHTML = "Edit";
			}
			
		});

		delete_button.addEventListener("click", () => {
			list_el.removeChild(task_elemnt);
			// Remove the task from savedTasks array
			const index = savedTasks.indexOf(task);
			if (index !== -1) {
				savedTasks.splice(index, 1);
				// Update localStorage
				localStorage.setItem("tasks", JSON.stringify(savedTasks));
			}
		});

		tm_exit_button.addEventListener("click",()=>{
			task_manager.style.display = 'none';
			
		})
	});

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const task = input.value;
		if (!task) {
			alert("Please fill out the task");
			return;
		}

		const task_elemnt = document.createElement("div");
		task_elemnt.classList.add("task");

		const task_content_element = document.createElement("div");
		task_content_element.classList.add("content");
		task_elemnt.appendChild(task_content_element);

		const task_input_element = document.createElement("input");
		task_input_element.classList.add("text");
		task_input_element.type = "text";
		task_input_element.value = task;
		task_input_element.setAttribute("readonly", "readonly");
		task_content_element.appendChild(task_input_element);

		const task_button_element = document.createElement("div");
		task_button_element.classList.add("actions");

		const edit_button = document.createElement("button");
		edit_button.classList.add("edit");
		edit_button.innerHTML = "Edit";

		const delete_button = document.createElement("button");
		delete_button.classList.add("delete");
		delete_button.innerHTML = "Delete";

		task_button_element.appendChild(edit_button);
		task_button_element.appendChild(delete_button);
		task_elemnt.appendChild(task_button_element);

		list_el.appendChild(task_elemnt);

		input.value = "";

		edit_button.addEventListener("click", () => {
			if (edit_button.innerHTML.toLowerCase() == "edit") {
				task_input_element.removeAttribute("readonly");
				task_input_element.focus();
				edit_button.innerHTML = "Save";
			} else {
				task_input_element.setAttribute("readonly", "readonly");
				edit_button.innerHTML = "Edit";
			}
		});

		delete_button.addEventListener("click", () => {
			list_el.removeChild(task_elemnt);
			// Remove the task from savedTasks array
			const index = savedTasks.indexOf(task);
			if (index !== -1) {
				savedTasks.splice(index, 1);
				// Update localStorage
				localStorage.setItem("tasks", JSON.stringify(savedTasks));
			}
		});

		// Add the new task to savedTasks array
		savedTasks.push(task);

		// Save the updated tasks to localStorage
		localStorage.setItem("tasks", JSON.stringify(savedTasks));
	});
});
