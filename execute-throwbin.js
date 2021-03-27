browser.runtime.onMessage.addListener(request =>
{
	if(request.command == "sendTextSC")
	{
		document.getElementsByClassName(" CodeMirror-line ")[0].value = request.text;
		setTimeout(function(){ document.getElementsByClassName("bg-green-dark py-3 px-4 text-white rounded leading-tight focus:outline-none")[0].click(); }, 1000);
	}
	else if(request.command == "sendTextBTN")
	{
		document.getElementsByClassName(" CodeMirror-line ")[0].value = request.text;
		document.getElementsByClassName("appearance-none py-3 px-4 bg-white text-grey-darkest rounded leading-tight focus:outline-none")[0].value = request.format;
		document.getElementsByClassName("py-3 px-4 bg-white text-grey-darkest leading-tight rounded focus:outline-none shadow visible sm:invisible md:visible")[0].value = request.name;
		setTimeout(function(){ document.getElementsByClassName("bg-green-dark py-3 px-4 text-white rounded leading-tight focus:outline-none")[0].click(); }, 1000);
		//setTimeout(function(){ get current window url -> paste url (ez) }, 5000);
	}
});