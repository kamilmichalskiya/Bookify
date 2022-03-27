let client = null;
let subscription = null;

function showLog(logBody) {
    const log = document.createElement("p");
    log.appendChild(document.createTextNode(logBody));
    const logsElement = document.getElementById("logs");
    logsElement.appendChild(log);
}

function createConnection() {
    client = Stomp.client("ws://localhost:8080/queue");
    console.log('Stomp connect');
    client.connect({},
        function (frame) {
        },
        function (frame) {
            createConnection();
        });
}

function subscribe() {
    showLog("Subscribe /topic/test");
    subscription = client.subscribe("/topic/test", function (message) {
        let logBody = "".concat("|| message: ", message.body);
        showLog(logBody);
    });
}

function unsubscribe() {
    showLog("Unsubscribe /topic/test");
    subscription.unsubscribe();
}
