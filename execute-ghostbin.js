browser.runtime.onMessage.addListener(request =>
{
	if(request.command == "sendTextSC")
	{
		document.getElementById("text").value = request.text;
		setTimeout(function(){ document.getElementsByClassName("btn btn-primary")[0].click(); }, 1000);
	}
	else if(request.command == "sendTextBTN")
	{
		document.getElementById("text").value = request.text;
		document.getElementByName("password").value = request.pass;
		document.getElementByName("title").value = request.name;
		setTimeout(function(){ document.getElementsByClassName("btn btn-primary")[0].click(); }, 1000);
	}
	setTimeout(function(){ var link = document.createElement("linktopaste"); }, 3000);
	link.innerHTML = window.location.href; 
	link.select();
	document.execCommand("copy");
});
