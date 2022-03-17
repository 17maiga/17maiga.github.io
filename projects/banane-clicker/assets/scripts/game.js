function sayHi() {
    let output = document.getElementById("output").innerText
    switch (output) {
        case "hi": output = "hello"; break;
        case "hello": output = "hi"; break;
        default: output = "hi";
    }
}