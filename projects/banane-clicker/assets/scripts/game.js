function sayHi() {
    let output = document.getElementById("output");
    output.innerText = (output.innerText === "hello") ? "hi" : "hello";
}