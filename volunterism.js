document.addEventListener('DOMContentLoaded', function(){
var $select = document.querySelector('select');
var $button = document.querySelector('button');

$button.addEventListener('click', function(){
if ($select.value === 'Random Student'){
alert($select.value);

}



});

});

