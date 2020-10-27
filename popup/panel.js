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
			
		/*	| copy and exit function below is broken, needs some attention...|
			|	Just add a click to the copy-to-clipboard button			 |
			V																 V
		function exitW() {
		  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
			var dummy = document.createElement('input'), inText = tabs[0].url;
			document.body.appendChild(dummy);
			dummy.value = inText;
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			window.close();
		  });
		}
		*/
		
		function Go(text, format, exp, stat, check, disab, pass, name){
			browser.tabs.create({url:"https://pastebin.com/"}).then((tab) => {
				browser.tabs.executeScript({
					file: "/execute.js",
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
			
			Go(text, format, exp, stat, check, disab, pass, name);
		}
		else if (e.target.classList.contains("checkB")) {
			isCheck();
		}
	});
}

/* When the popup loads, add a click handler. */
listenForClicks();