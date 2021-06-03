function listenForClicks(){
	let button = document.querySelector('.button');
	let buttonText = document.querySelector('.tick');

	const tickMark = "<svg width=\"25\" height=\"25\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

	buttonText.innerHTML = "Send";

	button.addEventListener('click', function() {

		if (buttonText.innerHTML !== "Send") {
		  buttonText.innerHTML = "Send";
		} 
		else if (buttonText.innerHTML === "Send") {
		  buttonText.innerHTML = tickMark;
		}
		this.classList.toggle('button__circle');
	});

	document.addEventListener("click", (e) => {
		var text = document.getElementById("pastearea").value,
			format = document.getElementById("syntax").value,
			exp = document.getElementById("expire").value,
			stat = document.getElementById("exposure").value,
			check = false,
			disab = true,
			pass = document.getElementById("nameDis").value,
			name = document.getElementById("pName").value;
		
		function GoPastebin(text, format, exp, stat, check, disab, pass, name){
			browser.tabs.create({url:"https://pastebin.com/"}).then((tab) => {
				browser.tabs.executeScript({
					file: "/execute-pastebin.js",
					runAt: "document_idle"
				}).then(() => { browser.tabs.sendMessage(tab.id, {command: "sendTextBTN", text: text, format: format, exp: exp, stat: stat, check: check, disab: disab, pass: pass, name: name});
				}).then(() => { setTimeout(function(){ window.close(); }, 3000); });
			});
		}
		
		function GoGhostbin(text, format, exp, stat, check, disab, pass, name){
			browser.tabs.create({url:"https://ghostbin.com/"}).then((tab) => {
				browser.tabs.executeScript({
					file: "/execute-ghostbin.js",
					runAt: "document_idle"
				}).then(() => { browser.tabs.sendMessage(tab.id, {command: "sendTextBTN", text: text, format: format, exp: exp, stat: stat, check: check, disab: disab, pass: pass, name: name});
				}).then(() => { setTimeout(function(){ window.close(); }, 3000); });
			});
		}
		
		function GoThrowbin(text, format, exp, stat, check, disab, pass, name){
			browser.tabs.create({url:"https://throwbin.io/"}).then((tab) => {
				browser.tabs.executeScript({
					file: "/execute-throwbin.js",
					runAt: "document_idle"
				}).then(() => { browser.tabs.sendMessage(tab.id, {command: "sendTextBTN", text: text, format: format, exp: exp, stat: stat, check: check, disab: disab, pass: pass, name: name});
				}).then(() => { setTimeout(function(){ window.close(); }, 3000); });
			});
		}
		
		function isCheck(){
			switch(document.getElementById("disCB").checked){
				case true:
					document.getElementById("nameDis").removeAttribute("disabled");
					break;
				
				case false:
					document.getElementById("nameDis").setAttribute("disabled", true);
					break;
			}
		}

		function siteCheck(){
			switch(document.getElementById("disSite").value){
				case "Pastebin":
					document.getElementById("nameDis").removeAttribute("disabled");
					document.getElementById("nameDis").removeAttribute("disabled");
					document.getElementById("syntax").removeAttribute("disabled");
					document.getElementById("exposure").removeAttribute("disabled");
					document.getElementById("expire").removeAttribute("disabled");
					break;
				
				case "Ghostbin":
				   	document.getElementById("nameDis").removeAttribute("disabled");
					document.getElementById("syntax").setAttribute("disabled", true);
					document.getElementById("exposure").setAttribute("disabled", true);
					document.getElementById("expire").setAttribute("disabled", true);
					break;
					
				case "Throwbin":
					document.getElementById("nameDis").setAttribute("disabled", true);
					document.getElementById("syntax").setAttribute("disabled", true);
					document.getElementById("exposure").setAttribute("disabled", true);
					document.getElementById("expire").setAttribute("disabled", true);
					break;
			}
		}

		if (e.target.classList.contains("send")) {
			switch(document.getElementById("disCB").checked){
				case true:
					check = true;
					disab = false;
					break;
				
				case false:
					check = false;
					disab = true;
					break;
			}
			
			if (document.getElementById("disSite").value === "Pastebin")
			{
				GoPastebin(text, format, exp, stat, check, disab, pass, name);
			}
			else if (document.getElementById("disSite").value === "Ghostbin")
			{
				GoGhostbin(text, format, exp, stat, check, disab, pass, name);
			}
			else if (document.getElementById("disSite").value === "Throwbin")
			{
				GoThrowbin(text, format, exp, stat, check, disab, pass, name);
			}
		}
		else if (e.target.classList.contains("checkB")) {
			isCheck();
		}
		siteCheck();
	});
}

/* When the popup loads, add a click handler. */
listenForClicks();
