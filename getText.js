browser.runtime.onMessage.addListener((request) =>
{
	if(request.command == "getSelectedText")
	{
		var text = window.getSelection().toString();
		
		return Promise.resolve(
		{
			text: text
		});
	}
});