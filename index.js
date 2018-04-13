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
		var checkbox = `<input type="checkbox" id="task${i}-status"/>`;
		var delete_button = `<button onClick=
		"deleteButtonClicked(this.id)" class="delete-task" id="task${i}-delete">x</button>`;
		var task = `<span id="task${i}-name">${task_name}</span>`;
		var closing_div = `</div>`;

		var element = opening_div + checkbox + delete_button + task + closing_div;

		document.getElementById('task-list').innerHTML += element;
	}

	// attachDeletionListeners();
}

function attachDeletionListeners() {
	//get all delete buttons
	var delete_buttons = document.getElementsByClassName("delete-task");

	var button_id, task_id;

	//attach event listeners to each button
	for (var i=0; i< delete_buttons.length; i++) {
		//get task name's id from button id
		button_id = delete_buttons[i].id;

		//task_id = 'task#-' + name
		task_name_id = button_id.slice(0, button_id.length-6) + 'name'

		console.log(task_name_id)

		//add event listener to button
		document.getElementById(button_id).addEventListener("click", deleteButtonClicked(task_name_id));
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

//Run JS code after HTML elements have rendered
document.addEventListener('DOMContentLoaded', main);