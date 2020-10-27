	function openPastebin(text) {
	browser.tabs.create({url:"https://pastebin.com/"}).then(
		(tab) => {
			browser.tabs.executeScript({
				file: "/execute.js",
				runAt: "document_idle"
			}).then(
				() => {
					browser.tabs.sendMessage(tab.id, {command: "sendTextSC", text: text});
				}
			);
		}
	);
}

function scFire()
{
	// Insert the content.js to the active tab
	browser.tabs.executeScript({
		file: "/getText.js",
		runAt: "document_idle"
	}).then(
		// When executed script search for all current active tabs
		browser.tabs.query({active: true, currentWindow: true}).then
		(
			(tabs) => 
			{
				for (const tab of tabs)
				{
					// Then send a message to this tab to request the "getSelection"
					browser.tabs.sendMessage(tab.id, {command: "getSelectedText"}).then
					(
						(response) =>
						{	
							openPastebin(response.text);
						}
					);
				}
			}
		)
	);
}

/**
 * Fired when a registered command is activated using a keyboard shortcut.
 */
browser.commands.onCommand.addListener
(
	(command) =>
	{
		if(command == "scFire")
		{
			scFire();
		}
	}
);