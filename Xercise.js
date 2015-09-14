var consoleMessage = document.getElementById('one');
document.querySelector('form').addEventListener('submit', function (a) {
    a.preventDefault();
    console.log(consoleMessage.value);
});

var consoleMessageTwo = document.getElementById('two');
document.querySelector('form').addEventListener('submit', function (b) {
    b.preventDefault();
    console.log(consoleMessageTwo.value);
});

var consoleMessageThree = document.getElementById('three');
document.querySelector('form').addEventListener('submit', function (c) {
    c.preventDefault();
    console.log(consoleMessageThree.value);
});

var consoleMessageFour = document.getElementById('four');
document.querySelector('form').addEventListener('submit', function (d) {
    d.preventDefault();
    console.log(consoleMessageFour.value);
});
