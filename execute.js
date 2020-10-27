browser.runtime.onMessage.addListener(request =>
{
	if(request.command == "sendTextSC")
	{
		document.getElementById("postform-text").value = request.text;
		setTimeout(function(){ document.getElementsByClassName("btn")[0].click(); }, 1000);
	}
	else if(request.command == "sendTextBTN")
	{
		document.getElementById("postform-text").value = request.text;
		document.getElementById("postform-format").value = request.format;
		document.getElementById("postform-expiration").value = request.exp;
		document.getElementById("postform-status").value = request.sta;
		document.getElementById("postform-is_password_enabled").checked = request.check;
		document.getElementById("postform-password").disabled = request.disab;
		document.getElementById("postform-password").value = request.pass;
		document.getElementById("postform-name").value = request.name;
		setTimeout(function(){ document.getElementsByClassName("btn")[0].click(); }, 1000);
	}
});