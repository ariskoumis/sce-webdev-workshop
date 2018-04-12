function main() {
	document.getElementById("submit-task").addEventListener("click", submitTaskClicked);
}

function submitTaskClicked() {
	var task_name = document.getElementById("task-name").value;
	console.log("Task:" + task_name);
}

document.addEventListener('DOMContentLoaded', main);