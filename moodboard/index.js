
$("#form_id").submit(function(e) {
    e.preventDefault();
  // Your Code Here!

  	var input_value= document.getElementById("link_input").value
  		console.log(input_value);
  	var i= document.createElement('img');
  		i.src= input_value;
  	var containerDiv= document.getElementById('container').appendChild(i);
  		document.getElementById('form_id').reset();
  		i.style.position='absolute'
  		i.style.left= Math.floor(Math.random()* window.innerWidth)+'px';
  		i.style.top= Math.floor(Math.random()*window.innerHeight)+'px';
});
