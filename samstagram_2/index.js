 // Your Code Here!
$("#form1").submit(function(e){
	e.preventDefault();
	var imageValue= document.getElementById('image').value;
	var captionValue= document.getElementById('caption').value;
	
	addNewItem(imageValue, captionValue)

	document.getElementById('image').value=" "
	document.getElementById('caption').value=" "
});

function addNewItem(imageValue, captionValue){
	var new_post= document.createElement('div')
	new_post.classList.add('new_post')

	var i= document.createElement('img');
  	i.src= imageValue;
  	new_post.appendChild(i)

	var caption =document.createElement('p');
	caption.innerHTML = captionValue;
	new_post.appendChild(caption);

	var remove= document.createElement('div');
	remove.innerHTML='x';
	remove.classList.add('takeaway');
	remove.style.right='5px';
	remove.style.top='5px';

	remove.addEventListener('click',function(){
		var new_post_id= String(Math.random())
		new_post.id= new_post_id
		document.getElementById(new_post_id).remove()
	});

	new_post.appendChild(remove)
	document.getElementById('container').appendChild(new_post)

}; 