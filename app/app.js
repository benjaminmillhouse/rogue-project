// 37 - left
// 38 - up
// 39 - right
// 40 - down
// 32 - spacebar

$(document).ready(function () {
    var hero = new Character('', 1);
    $('input[name="name-input"]').keypress(function (event) {
        // If enter is pressed, save character name and load dungeon
        if (event.keyCode === 13) {
            var name = event.target.value;
            hero.name = name;
            hero.element = $('<span class="icon" id="hero"></span>');
            getMap('./dungeon.html');
            hero.render();
            console.log(hero);
        }
    });
    var bat = new Bat();
    bat.element = $('<span class="icon" style="left: 45px;">B</span>');
    bat.render();
    /**
     * This function loads the HTML file for the passed-in map, and udpates
     * the view to show it.
     *
     * @param {string} url - The url of the map that you want to display
     */
    function getMap(url) {
        $('#title-window').css('display', 'none');
        $('#game-window').css('display', 'initial');
        updateMessage('Hello ' + hero.name + ', Welcome to the Dungeons of Doom!');
        updateStatusBar();
        var down = true;
        $(document).keydown(function (event) {
            event.preventDefault();
            if (event.keyCode >= 37 && event.keyCode <= 40) {
                hero.move(event.keyCode.toString('10'));
            } else if (event.keyCode === 32) {
                hero.attack(bat);
                window.setTimeout(function () {
                    bat.attack(hero);
                    updateStatusBar();
                    bat.move(down ? '40' : '38');
                    down = !down;
                }, 1000);
            }
        })
    }

    /**
     * Call this to update the values of the status bar
     */
    function updateStatusBar() {
        $('#sb-level').text(hero.level);
        $('#sb-hp').text(hero.hp + '(' + hero.hpMax + ')');
        $('#sb-str').text(hero.str + '(' + (hero.str + hero.strMod) + ')');
        $('#sb-gold').text(hero.gold);
        $('#sb-armor').text(hero.armor);
        $('#sb-exp').text(hero.exp + '/' + hero.tnl);
    }
});

/**
 * Update the message above the game window
 * @param {string} value message to pass to the box
 */
function updateMessage(value) {
    $('#message-box').text(value);
}