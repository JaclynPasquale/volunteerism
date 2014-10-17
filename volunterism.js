document.addEventListener('DOMContentLoaded', function(){
	var $select = document.querySelector('select');
	var $button = document.querySelector('button');

 	$button.addEventListener('click', function(){
   		var $target = document.querySelector('.target');
   		var docFragment = createPTag();
    		$target.appendChild(docFragment);
 	 });



	$button.addEventListener('click', function(){
		if ($select.value === 'Random Student'){
			var students = ['joe', 'sue', 'jim', 'tom', 'dick', 'harry', 'jane', 'june','may','martha', 'jack']
			var showRandomStudent = students[Math.floor(Math.random() * 10) + 1];

			alert(showRandomStudent)
		} else if ($select.value === 'Neighbor Pairing'){
			var students = ['joe', 'sue', 'jim', 'tom', 'dick', 'harry', 'jane', 'june','may','martha', 'jack']
			
			var pair = []
			for (var i = 0; i < students.length; i++) {
				var number = Math.floor(Math.random() * students.length) -1
				var showNeighborPairs = students[number]; 
				if (pair.length < 2){
					pair.push(showNeighborPairs);
					students.splice(number, 1);
				} else {pair = []}
   
			}
			alert(pair)
			
		}
		});
		
});
function createPTag(){
  var docFragment = document.createDocumentFragment();

  var $div = document.createElement('div');
  $div.setAttribute('class', 'myClass');
  var $p = document.createElement('p');
  $div.appendChild($p);
  $p.textContent = 'Hi';
  docFragment.appendChild($div);

  return docFragment;
}
