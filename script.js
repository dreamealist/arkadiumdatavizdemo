var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);
    } else {
        console.log("we connected to the server, but it returned an error.")
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
};

ourRequest.send();
