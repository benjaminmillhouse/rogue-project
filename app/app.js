$(document).ready(function () {
    function Character() {
        this.name = name;
    }
    var character = new Character();
    $('input[name="name-input"]').keypress(function (event) {
        if (event.keyCode === 13) {
            var name = event.target.value;
            alert('Welcome, ' + name + '!');
            character.name = name;
        }
    });

    $.get('./index.html', function () {
        console.log(arguments);
    });
});