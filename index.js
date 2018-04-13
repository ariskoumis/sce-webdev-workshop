var tasks = [];

function main() {
	document.getElementById("submit-task").addEventListener("click", submitTaskClicked);
}

function submitTaskClicked() {
	var task_name = document.getElementById("task-name").value;
	tasks.push(task_name);
	renderList();
}

function renderList() {
	//clear existing list
	document.getElementById('task-list').innerHTML = "";

	for (var i=0; i<tasks.length; i++) {
		task_name = tasks[i];

		// Create HTML element for task from template.
		// Template
		// 	<div id="task-1">
		// 			<input type="checkbox" id="task1-status"/>
		// 			<button id="task1-delete">x</button>
		// 			<span id="task1-name">Get Groceries</span>
		// 	</div>
		var opening_div = `<div id="task${i}"/>`;
		var checkbox = `<input onClick="toggleCompletion(this.id)" type="checkbox" id="task${i}-status"/>`;
		var delete_button = `<button onClick="deleteButtonClicked(this.id)" class="delete-task" id="task${i}-delete">x</button>`;
		var task = `<span id="task${i}-name">${task_name}</span>`;
		var closing_div = `</div>`;

		var element = opening_div + checkbox + delete_button + task + closing_div;

		document.getElementById('task-list').innerHTML += element;
	}

}

function deleteButtonClicked(button_id) {
	//Get Task's ID
	var task_name_id = button_id.slice(0, button_id.length-6) + 'name';

	//Get Task's Name
	var task_name = document.getElementById(task_name_id).innerHTML;

	//get task's index in tasks array
	var task_index = tasks.indexOf(task_name);

	//delete task
	tasks.splice(task_index, 1);

	renderList();
}

function toggleCompletion(checkbox_id) {
	//Get Task's ID
	var task_name_id = checkbox_id.slice(0, checkbox_id.length-6) + 'name';

	//Get Task Element
	var task = document.getElementById(task_name_id);

	//Check if struck through
	var is_struck = (task.style.getPropertyValue("text-decoration") == "line-through");

	if (is_struck) {
		task.style.removeProperty("text-decoration");
	} else {
		task.style.setProperty("text-decoration", "line-through");	
	}

}

//Run JS code after HTML elements have rendered
document.addEventListener('DOMContentLoaded', main);