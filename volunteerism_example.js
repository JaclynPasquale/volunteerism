document.addEventListener('DOMContentLoaded", function(){
	var $form = document.getElementById("generate-group");
	var students = ["bob", "joe", "susie", "sam", "julie"];

	$form.addEventListener("submit, function(event){
	event.preventDefault();
	var $ul = document.getElementById("results");
	$ul.innerHTML = "";
	var $li = document.createElement("li");

	//pick a student//
	var studentName = getRandomInt(0, students.length);
	var studentName = students[studentNumber];

	$li.innerHTML = studentName;
	$ul.appendChild($li);
	});
});
