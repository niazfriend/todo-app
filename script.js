function a() {
	var storage = [];
	var b = document.getElementById("get").value;
	if (b === ""){
		alert("enter your value its not an empty!")
	}
	else{
	storage.push(b);	
	var c = document.getElementById("save").innerHTML += "<li>"+b+"</li>";
	b = "";
	}
}
function remove() {
	storage = [];
	alert(storage);
}
