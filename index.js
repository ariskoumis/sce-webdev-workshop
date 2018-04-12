var tasks = [];
var id_number = 1;

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
		var opening_div = `<div id="task${id_number}"/>`;
		var checkbox = `<input type="checkbox" id="task${id_number}-status"/>`;
		var delete_button = `<button id="task${id_number}-delete">x</button>`;
		var task = `<span id="task${id_number}-name">${task_name}</span>`;
		var closing_div = `</div>`;

		var element = opening_div + checkbox + delete_button + task + closing_div;

		document.getElementById('task-list').innerHTML += element;
	}

	//Increment ID number so each task in uniquely identifiable.
	id_number++;
}

//Run JS code after HTML elements have rendered
document.addEventListener('DOMContentLoaded', main);