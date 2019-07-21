// Your Code Here!
$("#form2").submit(function(e){
	e.preventDefault();
	var nameValue= document.getElementById('name').value;
	var imageValue= document.getElementById('imageedit').value;
	var bioValue= document.getElementById('bio').value;
	var submitValue= document.getElementById('save').value;

		document.getElementById('nameInfo').innerHTML= document.getElementById('name').value;
		document.getElementById('andrew').src= document.getElementById('imageedit').value;
		document.getElementById('bioInfo').innerHTML= document.getElementById('bio').value;

	document.getElementById('name').value=" "
	document.getElementById('imageedit').value=" "
	document.getElementById('bio').value=" "
});