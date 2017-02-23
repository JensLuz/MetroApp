var webSocketManager = function(){
	
};

/* var WebSocketManager = function(){
	var wsUri = "ws://echo.websocket.org/";
	var output;

	function init() {
		console.log("Initializing Websocket");
		testWebSocket();
	}

	function testWebSocket() {
		console.log("Testing Websocket...");
		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt) { onOpen(evt) };
		websocket.onclose = function(evt) { onClose(evt) };
		websocket.onmessage = function(evt) { onMessage(evt) };
		websocket.onerror = function(evt) { onError(evt) };
	}

	function onOpen(evt) {
		console.log("Connected");
		doSend("First message");
	}

	function onClose(evt) {
		console.log("Disconnected");
	}

	function onMessage(evt) {
		console.log("Response: " + evt.data);
		websocket.close();
	}

	function onError(evt) {
		writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
	}

	function doSend(message) {
		console.log("Sending: "+ message);
		websocket.send(message);
	}

	window.addEventListener("load", init, false);
}; */