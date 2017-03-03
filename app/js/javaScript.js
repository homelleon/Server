window.onload = function () {
	var button = document.getElementsByClassName('button');
	
	for(var i = 0; i < button.length; i++) {
		b = button[i];
		b.onmouseover = function() {
			this.style.backgroundColor = "blue";
		};
		
		b.onmouseout = function() {
			this.style.color = "red";
			this.style.backgroundColor = "";
		};
		
		b.onclick = function() {
			alert('Pressed!');
			this.style.backgroundColor = "";
		};
	}
}

