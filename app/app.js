// 37 - left
// 38 - up
// 39 - right
// 40 - down

$(document).ready(function () {
    var character = new Character();
    $('input[name="name-input"]').keypress(function (event) {
        // If enter is pressed, save character name and load dungeon
        if (event.keyCode === 13) {
            var name = event.target.value;
            character.name = name;
            getMap('./dungeon.html');
        }
    });

    /**
     * This function loads the HTML file for the passed-in map, and udpates
     * the view to show it.
     *
     * @param {string} url - The url of the map that you want to display
     */
    function getMap(url) {
        $('#title-window').css('display', 'none');
        $('#game-window').css('display', 'initial');
        updateMessage('Hello ' + character.name + ', Welcome to the Dungeons of Doom!');
        updateStatusBar();
        $(document).keydown(function (event) {
            event.preventDefault();
            if (event.keyCode === 39) {
                $('#hero').animate({ left: '+=15' }, 10, 'linear');
            } else if (event.keyCode === 37) {
                $('#hero').animate({ left: '-=15' }, 10, 'linear');
            } else if (event.keyCode === 38) {
                $('#hero').animate({ top: '-=20' }, 10, 'linear');
            } else if (event.keyCode === 40) {
                $('#hero').animate({ top: '+=20' }, 10, 'linear');
            }
        })
    }

    /**
     * Call this to update the values of the status bar
     */
    function updateStatusBar() {
        $('#sb-level').text(character.level);
        $('#sb-hp').text(character.hp + '(' + character.hpMax + ')');
        $('#sb-str').text(character.str + '(' + (character.str + character.strMod) + ')');
        $('#sb-gold').text(character.gold);
        $('#sb-armor').text(character.armor);
        $('#sb-exp').text(character.exp + '/' + character.tnl);
    }
});

/**
 * Update the message above the game window
 * @param {string} value message to pass to the box
 */
function updateMessage(value) {
    $('#message-box').text(value);
}